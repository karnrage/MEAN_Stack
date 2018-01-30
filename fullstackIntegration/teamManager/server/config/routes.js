// var mongoose = require('mongoose');
// var logReg = mongoose.model('notes')


// let _dbUrl = "/mongoPlayers";

//wrapping the route in a function
var playerController = require('../controllers/players.js');
module.exports = function(app) {

    // app 
    // .get('api/tasks', NoteController.index)
    // .post('api/tasks', taskController.create)
    // .all("*", (req,res,next) => {
    //   res.sendFile(path.resolve("./angularApp/dist/index.html"))
    // });

    app.get( "/showPlayers", function (req, res) {
        console.log("HERE IN MongoPlayers- app.get");
        playerController.showPlayers(req, res);
    });
    app.post( "/newPlayer", function (req, res) {
        console.log("HERE IN MongoPlayers- app.post");
        playerController.newPlayer(req, res);
    });
    app.post( "/deletePlayer", function (req, res) {
        console.log("HERE IN MongoPlayers delete- app.post");
        playerController.deletePlayer(req, res);
    });
    app.get('/changeState/:state/:game/:id', function(req,res){
        playerController.changeState(req,res);
        console.log("========inside change state route handler========")
    });
    app.all("*", (request, response) => { 
        response.sendFile(path.resolve("./teamManagerAngularApp/dist/index.html")) 
    });

   

//closing the module . exports fxn
}