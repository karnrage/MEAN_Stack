var express = require("express");
var path = require("path");
var app = express(); 
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(session({secret: 'codingdojorocks'}));
app.use(bodyParser.urlencoded({extended: true}));
//will direct in EJS (HTML-ish) where to start filepath for style.css
app.use(express.static(__dirname + '/client/static'));

app.set('views', __dirname + '/client/views'); 
app.set('view engine', 'ejs');

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
  })