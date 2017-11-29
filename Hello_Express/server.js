// Load the express module (Where do you think this comes from?)
var express = require("express");
// invoke var express and store the resulting application in var app
var app = express();

// lets handle the base route "/" and respond with "Hello Express"
app.get('/', function(request, response) {
    response.send("<h1>Hello Express</h1>");
  })
  // notice that the function is app.get(...) why do you think the function is called get?
  
// Tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
  })
  // this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
  