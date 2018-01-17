// var mongoose = require('mongoose');
// var logReg = mongoose.model('notes')

let _dbUrl = "/mongoPlayers";

//wrapping the route in a function
var playerController = require('../controllers/players.js');
module.exports = function(app) {

    // app 
    // .get('api/tasks', NoteController.index)
    // .post('api/tasks', taskController.create)
    // .all("*", (req,res,next) => {
    //   res.sendFile(path.resolve("./angularApp/dist/index.html"))
    // });

    app.get( _dbUrl, function (req, res) {
        console.log("HERE IN MongoPlayers- app.get");
        playerController.showPlayers(req, res);
    });
    app.post( _dbUrl, function (req, res) {
        console.log("HERE IN MongoNotes- app.post");
        playerController.newPlayer(req, res);
    });
    app.all("*", (request, response) => { 
        response.sendFile(path.resolve("./teamManagerAngularApp/dist/index.html")) 
    });

   

//closing the module . exports fxn
}