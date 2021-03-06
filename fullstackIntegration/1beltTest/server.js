
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var cookieParser = require('cookie-parser');
var path = require("path");
var tempData = require('tempData');
var app = express();

app.use(session({secret: 'codingdojorocks'})); 
app.use(bodyParser.json());
app.use(express.static(__dirname+'/trivia/dist'));
app.use(cookieParser());
require('./server/config/mongoose.js');

var routes = require('./server/config/routes')
routes(app);

app.listen(8000, function(){
    console.log('====LISTENING ON PORT 8000====')
})

// // require express
// var express = require("express");
// // path module -- try to figure out where and why we use this
// var path = require("path");
// // create the express app
// var app = express();
// var bodyParser = require('body-parser');
// // use it!
// app.use(bodyParser.urlencoded({ extended: true }));
// // static content
// app.use(express.static(path.join(__dirname, "./static")));
// // setting up ejs and our views folder
// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');
// // root route to render the index.ejs view
// app.get('/', function(req, res) {
//  res.render("index");
// })
// // post route for adding a user
// app.post('/users', function(req, res) {
//  console.log("POST DATA", req.body);
//  // This is where we would add the user to the database
//  // Then redirect to the root route
//  res.redirect('/');
// })
// // tell the express app to listen on port 8000
// app.listen(8000, function() {
//  console.log("listening on port 8000");
// });
