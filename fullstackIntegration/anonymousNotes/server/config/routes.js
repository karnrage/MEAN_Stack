// var mongoose = require('mongoose');
// var logReg = mongoose.model('notes')

let _dbUrl = "/mongoNotes";

//wrapping the route in a function
var notesController = require('../controllers/notes.js');
module.exports = function(app) {

    // app 
    // .get('api/tasks', NoteController.index)
    // .post('api/tasks', taskController.create)
    // .all("*", (req,res,next) => {
    //   res.sendFile(path.resolve("./angularApp/dist/index.html"))
    // });

    app.get( _dbUrl, function (req, res) {
        console.log("HERE IN MongoNotes- app.get");
        notesController.showNotes(req, res);
    });
    app.post( _dbUrl, function (req, res) {
        console.log("HERE IN MongoNotes- app.post");
        notesController.newNote(req, res);
    });
    app.all("*", (request, response) => { 
        res.sendFile(path.resolve("./AnonymousNotesAngularApp/dist/index.html")) 
    });

   

//closing the module . exports fxn
}