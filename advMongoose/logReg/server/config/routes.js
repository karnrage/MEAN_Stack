var mongoose = require('mongoose');
var logReg = mongoose.model('logReg')

//wrapping the route in a function
var logRegController = require('../controllers/logReg.js');
module.exports = function(app) {

    app.get('/', function (req, res){
           console.log("IN /");
            res.render('main');
    
        })
    
    // // -------------------add page--------displays form only
    // app.get('/alpaca/new', function (req, res){            
    //         console.log("IN /alpaca/new");
    //         res.render('new');
    //     })
    
    // -----------post route for form only------------
    app.post('/register', function (req, res){
        console.log("IN /create");
        logRegController.create(req, res)
    });

    // -----------post route for form only------------
    app.post('/login', function (req, res){
        console.log("IN /login");
        logRegController.login(req, res)
    });
    
    // ---------- show page.........shows all alpacas 
    app.get('/success', function (req, res){
        logRegController.showAll(req,res)
    });
    
    // // ...........................one alpaca info.......done
    // app.get('/alpaca/:id', function (req, res){
    //     // findOne returns single, no need to do singleAlpaca[0] on line 109 that does the render    
    //     alpaca.showOne(req,res)
    // });
    
    // app.get('/alpaca/destroy/:id', function (req, res){
    //     // findOne returns single, no need to do singleAlpaca[0] on line 109 that does the render
    //     alpaca.remove(req,res)    

    // });
    
    // // ............to edit/show existing alpaca........in prog
    // app.get('/alpaca/edit/:id', function (req, res){
    //     alpaca.edit(req,res)
       
    // });
            
    // //............to edit/post existing alpaca........in prog
    // app.post('/alpaca/edit/:id', function (req, res){
    //     alpaca.editPost(req,res)
     
    // });

//closing the module . exports fxn
}