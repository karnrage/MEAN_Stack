var express = require("express");
var path = require("path");
var session = require('express-session'); 
var tempData = require('tempData');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(session({secret: 'keep it secret keep it safe'}));
app.use(bodyParser.json()); 
// app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, './templateAngApp/dist/')));

app.use(cookieParser()); 
  

// needed for schemas
require('./server/config/mongoose.js');

// needed for routes
let routes_setter = require('./server/config/routes.js');
routes_setter(app);

// listens on a port
app.listen(8000, function() {
 console.log("listening on port 8000");
});