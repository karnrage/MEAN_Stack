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
    app.post( "/newUser", function (req, res) {
        console.log("HERE IN MONGO DB USERS ROUTE- app.post");
        userController.newUser(req, res);
    });
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