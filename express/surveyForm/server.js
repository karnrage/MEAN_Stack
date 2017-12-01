// require body-parser
var bodyParser = require('body-parser');
// use it!

// Load the express module (Where do you think this comes from?)
var express = require("express");
// invoke var express and store the resulting application in var app
var app = express();
var session = require('express-session');
app.use(session({secret: 'codingdojorocks'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/static"));


// app.post('/users', function (req, res){
//     // set the name property of session.  
//     req.session.name = req.body.name;
//     console.log(req.session.name);
//     //code to add user to db goes here!
//     // redirect the user back to the root route. 
//     res.redirect('/');
// });

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// lets handle the base route "/" and respond with "Hello Express"

app.get('/', function (req, res){
    // set the name property of session.  
    //code to add user to db goes here!
    // redirect the user back to the root route. 
    res.render('main');
});

app.post('/survey', function (req, res){
    console.log(req.body)
    req.session.nameField = req.body.nameField;
    req.session.dojoLocation = req.body.dojoLocation;
    req.session.favLanguage = req.body.favLanguage;
    req.session.email = req.body.email;
    req.session.tel = req.body.tel;
    req.session.comment = req.body.comment;
    console.log(req.session.nameField);
    // set the name property of session.  
    //code to add user to db goes here!
    // redirect the user back to the root route. 
    res.redirect('/submitted');
});

app.get('/submitted', function (req, res){
    var context = {
        "Your_Name" : req.session.nameField,
        "Your_Location": req.session.dojoLocation,
        "Your_Fav_Lang":req.session.favLanguage,
        "Your_email": req.session.email,
        "Your_tel": req.session.tel,
        "Your_comments" :req.session.comment,
    }
    
    // set the name property of session.  
    //code to add user to db goes here!
    // redirect the user back to the root route. 
    res.render('submitted', context);
});



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
  