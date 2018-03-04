var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt')

mongoose.Promise = global.Promise;

function createError(_path, _message) {
    var errors = [];
    var err = {
        path: _path,
        message: _message
    }
    errors.push(err);
    return errors;
}

module.exports = {
 
    newUser: function(request, response){
        console.log("inside mongoose: newUser fxn")
        if(request.body.password != request.body.confirmpassword){
            
            console.log("inside mongoose: password mismatch")
            var mismatch = {'errors': "Passwords mismatch", 'loginAgain': true}
            return response.json(mismatch)
        }
        // capital "User" is var User: Model<any>
        // lower "user" is (parameter) user: any
        User.findOne({email: request.body.email}, function(error, user){
            if(user != null){
                console.log("eMail already")
                var duplicate = {'errors': "Already registered", 'loginAgain': true}
                return response.json(duplicate)
            }
       
        let brandNewUser = new User(request.body);
        //NEED TO SPLUT UP INTO INDIVIDUAL ATTRIBUTES AND BREAKOUT PASSWORD AND HASH THAT SEPARATELY. SAVED FOR LATER
        // ooooorrr DO THE PRESAVE IN THE USER MODEL IN MONGOOSE
        brandNewUser.save(function(error, user){
                if(error){
                    console.log("========ERROR IN SAVING USER========")
                }
                else{
                    console.log("========SAVED USER========")
                    request.session.user = brandNewUser
                    // MAY HAVE PROBLEMS WITH SAVING ALL AT ONCE, MAY TRY TO SAVE BY EACH ATTRIBUTE
                    // req.session.last = user.last;
                    // req.session.first = user.first;
                    // req.session.user = user._id;
                    // req.session.email = user.email;
                    console.log(brandNewUser);
                    // console.log(req.body);
                    // res.json({'loggedinUserId': req.session.user, 'loggedinUserLastName': req.session.last, 'loggedinUserFirstName':req.session.first, 'loggedinUserEmail': req.session.email});
                    // res.json({'Id': req.session.user, 'LastName': req.session.last, 'FirstName':req.session.first, 'UserEmail': req.session.email});
                    response.json({'sessionUser': brandNewUser})  
                    
                }
            });
            
        });
    },

    logUser: function(request, response){
        console.log("inside mongoose: logUser fxn")
        console.log('request.body:', request.body)
        User.findOne({email: request.body.email}, function(error, DBreply){
        console.log(error, DBreply)
            if((!DBreply) || (error == !null)){
                console.log("where? usersController login:errors while trying to log in")
                var loginProb = {'errors': "Not registered", 'loginAgain': true}
                return response.json(loginProb)
            }
            else{
                console.log("where? usersController; found user")
                // if (bcrypt.compareSync(request.body.password, DBreply.password)) {
                // CAN BRING UP BACK AND COMMENT OUT BELOW IF I DO PRE.SAVE IN THE USER MODEL
                if ((request.body.password == DBreply.password)) {
                    console.log('LOG IN SUCCESS')
                    request.session.currentUser = DBreply
                    // response.json({'id': DBreply._id, 'firstName': DBreply.firstName, 'email': DBreply.email})  
                    console.log("===========reply from dbase", DBreply)
                    return response.json({'sessionUser': DBreply})
                } else {
                    console.log("password mismatch");
                    var mismatch = {'errors': "Users password/email do not match", 'loginAgain': true}
                    return response.json(mismatch);
                }
            }
        })
    },

    logout: function(request, response){
        console.log("inside mongoose: logout fxn")
        console.log('session:', request.session.id)
        if (request.session.id) {
            request.session.destroy();
            return response.json({ loggedOut: 'User is no longer in session' })
        } else {
            console.log('------session is over---logged out----')
            return response.json({ Error: 'User is not in session' })
        }
    }


}   