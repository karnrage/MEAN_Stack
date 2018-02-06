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
    // showPlayers: function (req, res) {
    //     // var players = Player.find({}).sort('-createdAt').exec(function (err, players) { DO NOT NEED TO SET EQUAL TO VARIABLE, BEING CALLED IN (err, players)
    //     Player.find({}).sort('-createdAt').exec(function (err, players) {
    //         if (err) {
    //             console.log(err);
    //             return null;
    //         }
    //         return res.json(players);
    //     });
    // },


    // PREFER BELOW CODE, BUT REPLACE BY UNCOMMENTED newUser ONCE WORKING
    // newUser: function (req, res) {
    //     if(req.body.password != req.body.confirmPassword){
    //         console.log("password mismatch");
    //         var mismatch = {'errors': "Passwords have a mismatch"}
    //         // DONT' UNDERSTAND 2nd PART  var passwordMatchError = {'errors': "Password confirmation must match password", 'backToLogin': true}
    //         return res.json(mismatch)
    //     }
    //     User.findOne({email: req.body.email}, function(error, user){
    //         if(user != null){
    //             var duplicate = {'errors': "This email is already registered"}
    //         }
    //     }
    //     var user = new User({
    //         name: req.body.name,
    //         password: req.body.password
    //     });
    //     console.log(user);
    //     user.save(function (err, result) {
    //         if (err) {
    //             console.log("There were errors in the submission");
    //             console.log(err);
    //             return err;
    //         }
    //         else {
    //             // db save was successful
    //             console.log("successfully added a document!");
    //             req.session.user = user;
    //             return res.json(result);
    //         }
    //     });
    // },

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
                    response.json({'user': brandNewUser})  
                    
                }
            });
            // .then((user)=>{
                             
                //         }
                //  )
            });
    },

    logUser: function(request, response){
        console.log("inside mongoose: logUser fxn")
        console.log('request.body:', request.body)
        User.findOne({email: request.body.email}, function(error, DBreply){
        console.log(error, DBreply)
            if(DBreply || errors == null){
                console.log("where? usersController login:errors while trying to log in")
                var loginProb = {'errors': "Not registered", 'loginAgain': true}
                return response.json(loginProb)
            }
            else{
                console.log("where? usersController; found user")
                if (bcrypt.compareSync(request.body.password, DBreply.password)) {
                    console.log('LOG IN SUCCESS')
                    request.session.currentUser = DBreply
                    response.json({'id': DBreply._id, 'firstName': DBreply.firstName, 'email': DBreply.email})  
                  } else {
                    console.log("password mismatch");
                    var mismatch = {'errors': "Users password/email do not match", 'loginAgain': true}
                    return response.json(mismatch);
                }
            }
        })
    },

            

    

    // deletePlayer: function (req, res) {
    //     console.log(req.body)
    //     Player.remove({ _id: req.body._id }, function (error) {
    //         if (error) {
    //             console.log('===ERROR DELETING DOCUMENT===')
    //             return res.json(error)
    //         } else {
    //             console.log('===SUCCESSFULLY DELETED DOCUMENT===')
    //             return res.json({ deleted: true })
    //         }
    //     })
      
    // },

    
    // changeState: function (req, res) {
       
    //     Player.find({ _id: req.params.id }, function (err, player) {
    //         console.log(req.params.id);
    //         console.log(player);
    //          console.log("here in controller", req.body);
    //          // above is empty on termincal because body is for post request
    //          console.log("here in controller", req.params);
    //         if (err) {
    //             console.log('===ERR changing state===')
    //             return res.json(err)
    //         } else {
    //             if (req.params.game === 'g1'){
    //                 // CHANGED BELOW TO state, STILL NO CHANGE
    //                 Player.update(player[0], {g1 : req.params.state}, function(err){
    //                     console.log("THIS IS THE NEW STATE");
    //                     console.log(req.params.state);
    //                     console.log(player[0]);
    //                     console.log("this is the PLAYER");
    //                     if (err){
    //                         res.json({'err': 'err saving'})
    //                         console.log('===FAILED SAVE g1 status===')
    //                     } else {
    //                         res.json({'ok': 'everything good'})
    //                         console.log('===SUCCESSFULLY g1 status===')
    //                     }
    //                 })
    //             }
    //             if (req.params.game === 'g2'){
    //                 Player.update(player[0], {g2 : req.params.state}, function(err){
    //                     if (err){
    //                         res.json({'error': 'error saving'})
    //                         console.log('===FAILED SAVE G2 status===')                            
    //                     } else {
    //                         res.json({'ok': 'everything good'})
    //                         console.log('===SUCCESSFULLY G2 status===')
    //                     }
    //                 })
    //             }
    //             if (req.params.game === 'g3'){
    //                 Player.update(player[0], {g3 : req.params.state}, function(err){
    //                     if (err){
    //                         res.json({'error': 'error saving'})
    //                         console.log('===FAILED SAVE G3 status===')                            
    //                     } else {
    //                         res.json({'ok': 'everything good'})
    //                         console.log('===SUCCESSFULLY G3 status===')
    //                     }
    //                 })
    //             }
            
    //         }
    //     })

    // }

}   