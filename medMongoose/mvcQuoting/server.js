// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");
// NO LONGER NEEDED WITH MODULARIZATION var mongoose = require('mongoose');
// NO LONGER NEEDED WITH MODULARIZATION mongoose.connect('mongodb://localhost/quotes');
// NO LONGER NEEDED WITH MODULARIZATION  var QuoteSchema = new mongoose.Schema({
//   name: String,
//   quote: String
// })
// NO LONGER NEEDED WITH MODULARIZATION var Quote = mongoose.model('Quote', QuoteSchema);
app.use(bodyParser.urlencoded({ extended: true }));
// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Remember that require will first run the file at the given location (in this
// case our routes.js file) and then return whatever is in module.exports. In our 
// case, the function that we store in module.exports is now stored in the "routes_setter" 
// variable. We then invoke the function passing it our app variable as an argument which sets 
// up all of our route handlers!

// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);
// root route to render the index.ejs view

// NO LONGER NEEDED WITH MODULARIZATION BELOW
// app.get('/', function(req, res) {
//   res.render("index");
// })
// app.post('/quotes', function(req,res){
//   var quote = new Quote({name: req.body.name, quote: req.body.quote});
//   quote.save(function(err) {
//     if(err){
//       console.log("something went wrong");
//     } else {
//       res.redirect('/main');
//     }
//   })
// })
// app.get('/main', function (req, res) {
//   Quote.find({}, function (err, quotes){
//     res.render('main', {quotes:quotes});  
//   });
// })
// ABOVE NO LONGER NEEDED WITH MODULARIZATION

// tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
