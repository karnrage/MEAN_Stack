var mongoose = require('mongoose');
var Alpaca = mongoose.model('Alpaca');
//wrapping the route in a function
module.exports =  {

    create: function(req, res) {
        var alpaca = new Alpaca();
        alpaca.name = req.body.name;
        alpaca.weight = req.body.weight;
        alpaca.color = req.body.color;
        alpaca.age = req.body.age;
        alpaca.save(function(err) {
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('something went wrong');
                res.redirect('/');
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added an al-PACK-a to the PACK!');
                res.redirect('/show');
            }
        })
    
    },

    showAll: function(req, res) {
        Alpaca.find({}, function(err, Alpaca) {
            
            if(err){
                res.render('main');
                console.log('something went wrong');
            } else {
                res.render('show', {Alpacas: Alpaca});
                console.log('successfully added an alpaca!');
            }
        });
    },

    showOne: function(req,res) {
        Alpaca.findOne({_id: req.params.id}, function(err, singleAlpaca){
            if (err) {
                console.log(err);
            }
            res.render('singleAlpaca', {"alpaca": singleAlpaca});
            // console.log(alpaca.weight)
        });
            console.log("IN /alpaca/:id")  
    },

    remove: function(req,res){
        Alpaca.remove({_id: req.params.id}, function(err, singleAlpaca){
            if (err) {
                console.log(err);
            }
            //need to redirect and not render. Cannot render with deleted item, nothing to render. Instead to redirec tto show page to show remaining alpacas.
            res.redirect('/show');
            // console.log(alpaca.weight)
        });
            console.log("/alpaca/destroy/:id")   

    },

    edit: function(req,res){
    Alpaca.findOne({_id: req.params.id}, function(err, singleAlpaca){
        if(err){console.log('something went wrong');
            res.render('main');
            
        } else { console.log("IN /alpaca/edit/:id");
        res.render('edit', {"alpaca": singleAlpaca});
       
    }
       
    });
},

    editPost: function(req,res){
        Alpaca.update({_id: req.params.id}, {name:req.body.name, weight : req.body.weight, color : req.body.color, age : req.body.age}, function(err){
            if(err){ console.log('something went wrong');
            res.render('main');
            } else { console.log("IN /alpaca/edit/:id");
            console.log('successfully edited an alpacas stats'); 
            res.redirect('/show');
            }
        });
},
    

    

    


// show: function(req, res) {
//     Quote.find({}, function(err, quotes) {
//         res.render('main', {quotes: quotes});
//     })
// },
//     

    //closing the module . exports fxn
}