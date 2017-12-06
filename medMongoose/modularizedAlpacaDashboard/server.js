var express = require("express");

var path = require("path");
var app = express();
 
var bodyParser = require('body-parser');

var session = require('express-session');


// var alpacaSchema = new mongoose.Schema({
//     name: String,
//     weight: Number,
//     color: String,
//     age: { type: Number, min: 1, max: 600 },
// //  }           { timestamps : {createdAt: 'createdAt', updatedAt: 'updatedAt'}
//    });
//    mongoose.model('Alpaca', alpacaSchema); // We are setting this Schema in our Models as 'Quote'
//    var Alpaca = mongoose.model('Alpaca') // We are retrieving this Schema from our Models, named 'Quote'
// //    changed var alpaca to var Alpaca.....now works
   

app.use(session({secret: 'codingdojorocks'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/client/static'));

app.set('views', __dirname + '/client/views'); 
app.set('view engine', 'ejs');

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

//------------------ homepage--------displays message only
// app.get('/', function (req, res){
//     Alpaca.find({}, function(err, Alpaca){
        
//         console.log("IN /");
        
        
//         res.render('main');

//     });
// });

// // -------------------add page--------displays form only
// app.get('/alpaca/new', function (req, res){    
        
//         console.log("IN /alpaca/new");

//     //     if(err){
//     //         res.render('main');
//     //         console.log('something went wrong');
//     //     } else {
//     //         res.render('main', {alpacas: alpaca});
//     //         console.log('successfully added a al-PACK-a!;-)');
//     //     }
//     // });
//         // res.render('main');

//         res.render('new');
//     });

// // -----------post route for form only------------
// app.post('/alpaca', function (req, res){
//     // console.log("POST DATA",req.body)
//     // var quote = new Quote({name: req.body.name, quote: req.body.quote});
//     var alpaca = new Alpaca();
//     alpaca.name = req.body.name;
//     alpaca.weight = req.body.weight;
//     alpaca.color = req.body.color;
//     alpaca.age = req.body.age;
//     alpaca.save(function(err) {
//         // if there is an error console.log that something went wrong!
//         if(err) {
//             console.log('something went wrong');
//             res.redirect('/');
//         } else { // else console.log that we did well and then redirect to the root route
//             console.log('successfully added an al-PACK-a to the PACK!');
//             res.redirect('/show');
//         }
//         });     
//     // console.log(req.body.name);
//     // console.log(req.body.quote);
// });

// // ---------- show page.........shows all alpacas 
// app.get('/show', function (req, res){
//     Alpaca.find({}, function(err, Alpaca) {

//         if(err){
//             res.render('main');
//             console.log('something went wrong');
//         } else {
//             res.render('show', {Alpacas: Alpaca});
//             console.log('successfully added an alpaca!');
//         }
//     });

// });

// // ...........................one alpaca info.......done
// app.get('/alpaca/:id', function (req, res){
//     // findOne returns single, no need to do singleAlpaca[0] on line 109 that does the render    
//     Alpaca.findOne({_id: req.params.id}, function(err, singleAlpaca){
//         if (err) {
//             console.log(err);
//         }
//         res.render('singleAlpaca', {"alpaca": singleAlpaca});
//         // console.log(alpaca.weight)
//     });
//         console.log("IN /alpaca/:id")    
// });

// app.get('/alpaca/destroy/:id', function (req, res){
//     // findOne returns single, no need to do singleAlpaca[0] on line 109 that does the render    
//     Alpaca.remove({_id: req.params.id}, function(err, singleAlpaca){
//         if (err) {
//             console.log(err);
//         }
//         //need to redirect and not render. Cannot render with deleted item, nothing to render. Instead to redirec tto show page to show remaining alpacas.
//         res.redirect('/show');
//         // console.log(alpaca.weight)
//     });
//         console.log("/alpaca/destroy/:id")    
// });

// // ............to edit/show existing alpaca........in prog
// app.get('/alpaca/edit/:id', function (req, res){
//     Alpaca.findOne({_id: req.params.id}, function(err, singleAlpaca){
//         if(err){console.log('something went wrong');
//             res.render('main');
            
//         } else { console.log("IN /alpaca/edit/:id");
//         res.render('edit', {"alpaca": singleAlpaca});
       
//         }   
//     });
// });
        
// //............to edit/post existing alpaca........in prog
// app.post('/alpaca/edit/:id', function (req, res){
//     Alpaca.update({_id: req.params.id}, {name:req.body.name, weight : req.body.weight, color : req.body.color, age : req.body.age}, function(err){
//         if(err){ console.log('something went wrong');
//         res.render('main');
//         } else { console.log("IN /alpaca/edit/:id");
//         console.log('successfully edited an alpacas stats'); 
//         res.redirect('/show');
//         }
//     });   
// });
    


// app.post('/quotes', function (req, res){
//     // console.log("POST DATA",req.body)
//     // var quote = new Quote({name: req.body.name, quote: req.body.quote});
//     var quotes = new Quote();
//     quotes.name = req.body.name;
//     quotes.quote = req.body.quote;
//     quotes.save(function(err) {
//         // if there is an error console.log that something went wrong!
//         if(err) {
//           console.log('something went wrong');
//           res.redirect('/');
//         } else { // else console.log that we did well and then redirect to the root route
//           console.log('successfully added a quote!');
//           res.redirect('/allQuotes');
//         }
//       });     
//     // console.log(req.body.name);
//     // console.log(req.body.quote);
// });

// app.get('/allQuotes', function (req, res){
//     Quote.find({}, function(err, quote) {

//         if(err){
//             res.render('index');
//             console.log('something went wrong');
//         } else {
//             res.render('allQuotes', {quotes: quote});
//             console.log('successfully added a quote!');
//         }
//     });

// });
    
    // var context = {
    //     "name" : req.session.name,
    //     "quote": req.session.quote,
    // }
    

// })
//     // set the name property of session.  
//     //code to add user to db goes here!
//     // redirect the user back to the root route. 
//     res.render('allQuotes', context);
// });



// app.get('/', function(request, response) {
    
//     var counter; 
//     if (!request.session.refresh){
//         //MUST be 1, and not zero. Zero is "falsy" value. Always equates to true.
//         request.session.refresh = 1;
//         counter = request.session.refresh;  
//     }
//     else {
//         request.session.refresh += 1;
//         counter = request.session.refresh;
         
//     }  
//     console.log(counter);    
//     response.render('main', {counter:counter});    
//     //left going to reference on client side; right is actual value calculated here on server side
//   })

    // notice that the function is app.get(...) why do you think the function is called get?

//   app.get('/reset', function(request, response){
//       request.session.destroy();
//       request.redirect('/');
//   });

//   app.get('/add2', function(request,response){
//       request.session.refresh +=2;
//       request.redirect('/');
//   });
  

// this is the line that tells our server to use the "/static" folder for static content



// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it


  


// Tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
  })
 // this line will almost always be at the end of your server.js file 
// (we only tell the server to listen after we have set up all of our rules)