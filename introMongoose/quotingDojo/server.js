
var bodyParser = require('body-parser');
var express = require("express");
var app = express();
//requiring 
var mongoose = require('mongoose');
var path = require("path");

var session = require('express-session');
//connecting or creating the db
mongoose.connect('mongodb://localhost/quotes');

mongoose.Promise = global.Promise;

var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
   })
   mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
   var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'Quote'
   

app.use(session({secret: 'codingdojorocks'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    // Quotes.find({}, function(errors, dbQuotes){
        
        console.log("IN /");
        // console.log(dbQuotes);

        // res.render('main', {quotes:dbQuotes});
        res.render('main');
    });

    

app.post('/quotes', function (req, res){
    // console.log("POST DATA",req.body)
    // var quote = new Quote({name: req.body.name, quote: req.body.quote});
    var quotes = new Quote();
    quotes.name = req.body.name;
    quotes.quote = req.body.quote;
    quotes.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
          console.log('something went wrong');
          res.redirect('/');
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully added a quote!');
          res.redirect('/allQuotes');
        }
      });     
    // console.log(req.body.name);
    // console.log(req.body.quote);
});

app.get('/allQuotes', function (req, res){
    Quote.find({}, function(err, quote) {

        if(err){
            res.render('index');
            console.log('something went wrong');
        } else {
            res.render('allQuotes', {quotes: quote});
            console.log('successfully added a quote!');
        }
    });

});
    
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
  // this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
  