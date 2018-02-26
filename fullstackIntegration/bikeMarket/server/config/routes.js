var mongoose = require('mongoose');

// let _dbUrl = "/mongoPlayers";

var userController = require('../controllers/users.js');
var User = mongoose.model('User')
var bikeController = require('../controllers/bikes.js');
var Bike = mongoose.model('Bike')

//wrapping the route in a function
module.exports = function(app) {

    // app 
    // .get('api/tasks', NoteController.index)
    // .post('api/tasks', taskController.create)
    // .all("*", (req,res,next) => {
    //   res.sendFile(path.resolve("./angularApp/dist/index.html"))
    // });

    // app.get( "/showPlayers", function (req, res) {
    //     console.log("HERE IN MongoPlayers- app.get");
    //     playerController.showPlayers(req, res);
    // });
    app.post( "/api/newUser", function (req, res) {
        console.log("HERE IN MONGO: NEW USERS ROUTE- app.post");
        req.session.email = req.body.email;
        console.log(req.session.email);
        userController.newUser(req, res);
    });
    app.post( "/api/logUser", function (req, res) {
        console.log("HERE IN MONGO: log USERS ROUTE- app.post");
        req.session.email = req.body.email;
        console.log(req.session.email);
        userController.logUser(req, res);
    });
    app.get("/api/logout", function (req,res){
        console.log("where?: here in Mongoose: logout user route - app.get");
        userController.logout(req,res);
        
    })
    app.post("/api/newBike", function (req,res){
        console.log("where?: here in Mongoose: newBike route - app.post");
        bikeController.newBike(req,res);
        
    })
    app.get("/api/showAll", function (req,res){
        console.log("where?: here in Mongoose: showAll route - app.get");
        bikeController.showBike(req,res);
        
    })
    app.post("/api/edit", function (req,res){
        console.log(req.body)
        console.log("where?: here in Mongoose: edit route - app.post");
        bikeController.editBike(req,res);
        
    })
    
    // app.post( "/deletePlayer", function (req, res) {
    //     console.log("HERE IN MongoPlayers delete- app.post");
    //     playerController.deletePlayer(req, res);
    // });
    // app.get('/changeState/:state/:game/:id', function(req,res){
    //     playerController.changeState(req,res);
    //     console.log("========inside change state route handler========")
    // });
    app.all("*", (request, response) => { 
        response.sendFile(path.resolve("./bicycleMarketplaceAngularApp/dist/index.html")) 
    });

   

//closing the module . exports fxn
}