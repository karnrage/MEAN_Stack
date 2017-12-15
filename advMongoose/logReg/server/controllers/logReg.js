var mongoose = require('mongoose');
var logReg = mongoose.model('logReg');
var bcrypt = require('bcrypt')
//wrapping the route in a function
module.exports =  {

    create: function(req, res) {
        if (req.body.pass !== req.body.confirm){
            console.log("===At password matching check====")
            var errors = 
            { 'errors': 
                { 'confirm': 
                    { 'message': "*Password confirmation must match*" } 
                } 
            }
            return res.render('main', {'Errors': errors})
        }        
        var logRegInstance = new logReg();
          logRegInstance.firstName = req.body.firstName;
          logRegInstance.lastName = req.body.lastName;
          logRegInstance.email = req.body.email;
          logRegInstance.pass = req.body.pass;
          logRegInstance.bDay = req.body.bDay;
          logRegInstance.save(function(err) {
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('something went wrong create');
                res.redirect('/');
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a user to the PACK!');
                res.redirect('/success');
                //change to this after seeing if works-> res.redirect('/show');
            }
        })
    
    },

    login: function(req, res){
        logReg.findOne({email: req.body.email}, function(error, response){
            if(error || response == null){
                console.log('=====THERE WAS AN ERROR LOGGING=====')
                console.log("Errors:", error)
                console.log("Response:", response)
                return res.render('main')
            } else {
                if(response != null){
                    bcrypt.compare(req.body.pass, response.pass)
                    .then(login => {
                            console.log("Response:", response)
                            return res.render('success', { 'User': response })
                    }).catch(error => {
                        return res.render('main')
                    })                    
                }else{
                    var errors = [];
                    var err = {
                        path: "email",
                        message: "Your email has not been registered in the DB yet"
                    }
                    errors.push(err);
                    return res.render('main', {errors: errors})
                }

            }
        })
    },

    showAll: function(req, res) {
        logReg.find({}, function(err, result) {
            //find tosses "err" and "result" into the function callback
            
            if(err){
                res.render('main');
                console.log('something went wrong showAll');
            } else {
                res.render('success', {User: result});
                console.log('successfully added an alpacaUser!');
            }
        });
    },

    // showOne: function(req,res) {
//         Alpaca.findOne({_id: req.params.id}, function(err, singleAlpaca){
//             if (err) {
//                 console.log(err);
//             }
//             res.render('singleAlpaca', {"alpaca": singleAlpaca});
//             // console.log(alpaca.weight)
//         });
//             console.log("IN /alpaca/:id")  
//     },

//     remove: function(req,res){
//         Alpaca.remove({_id: req.params.id}, function(err, singleAlpaca){
//             if (err) {
//                 console.log(err);
//             }
//             //need to redirect and not render. Cannot render with deleted item, nothing to render. Instead to redirec tto show page to show remaining alpacas.
//             res.redirect('/show');
//             // console.log(alpaca.weight)
//         });
//             console.log("/alpaca/destroy/:id")   

//     },

//     edit: function(req,res){
//     Alpaca.findOne({_id: req.params.id}, function(err, singleAlpaca){
//         if(err){console.log('something went wrong');
//             res.render('main');
            
//         } else { console.log("IN /alpaca/edit/:id");
//         res.render('edit', {"alpaca": singleAlpaca});
       
//     }
       
//     });
// },

//     editPost: function(req,res){
//         Alpaca.update({_id: req.params.id}, {name:req.body.name, weight : req.body.weight, color : req.body.color, age : req.body.age}, function(err){
//             if(err){ console.log('something went wrong');
//             res.render('main');
//             } else { console.log("IN /alpaca/edit/:id");
//             console.log('successfully edited an alpacas stats'); 
//             res.redirect('/show');
//             }
//         });
// },
    

    

    


// show: function(req, res) {
//     Quote.find({}, function(err, quotes) {
//         res.render('main', {quotes: quotes});
//     })
// },
//     

    //closing the module . exports fxn
}