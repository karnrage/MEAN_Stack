var mongoose = require('mongoose');


var userController = require('../controllers/users.js');
var User = mongoose.model('User')
var bucketController = require('../controllers/buckets.js');
var Bike = mongoose.model('Bucket')

//wrapping the route in a function
module.exports = function(app) {
    app.post( "/api/newUser", function (req, res) {
        console.log("where?: here in Mongoose: newUser route - app.post");
        req.session.first = req.body.first;
        console.log(req.session.first);
        userController.newUser(req, res);
    });
    app.get("/api/logout", function (req,res){
        console.log("where?: here in Mongoose: logout user route - app.get");
        userController.logout(req,res);
    });
    app.get("/api/showAll", function (req,res){
        console.log("where?: here in Mongoose: showAll route - app.get");
        userController.showUser(req,res);
        
    });
    app.get("/api/showAllList", function (req,res){
        console.log("where?: here in Mongoose: showAllList route - app.get");
        bucketController.showBuckets(req,res);
        
    });
    app.post("/api/newBucket", function (req,res){
        console.log("where?: here in Mongoose: newBucket route - app.post");
        bucketController.newBucket(req,res);
        
    });
    // app.all("*", (request, response) => { 
    //     response.sendFile(path.resolve("./templateAngApp/dist/index.html")) 
    // });

   

//closing the module . exports fxn
}