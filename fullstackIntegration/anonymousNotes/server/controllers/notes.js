var mongoose = require('mongoose');
var Note = mongoose.model('Note');

mongoose.Promise = global.Promise;

// module.exports = {
//     postNote: function(req, res){
//         console.log('===INSIDE postNote CONTROLLER===')
//         console.log('req.body', req.body)
//         var newNote = new Note({
//             text: req.body.text
//         })
//         console.log('new note:', newNote)
//         newNote.save(function(error){
//             if(error){
//                 console.log('===ERROR SAVING NOTE===')
//                 console.log(error)
//                 return res.json(error);
//             } else {
//                 console.log('===SUCCESSFULLY SAVED===');
//                 return res.json(newNote)
//             }
//         })
//     },
//     getAll: function(req, res){
//         console.log('===INSIDE GET ALL CONTROLLER===')
//         Note.find({}, function(error, response){
//             console.log('RESPONSE,', response)
//             console.log('ERRORS,', error);
//             if(error || response == null){
//                 console.log('===ERROR GETTING NOTES===')
//                 return res.json({'error': error, 'response': response})
//             } else {
//                 console.log('===SUCCESS GETTING NOTES===')
//                 return res.json(response)
//             }
//         })
//     }
// }

function createError(_path, _message) {
    var errors = [];
    var err = {
        path: _path,
        message: _message
    }
    errors.push(err);
    return errors;
}

module.exports = {
    showNotes: function (req, res) {
        var notes = Note.find({}).sort('-createdAt').exec(function (err, notes) {
            if (err) {
                console.log(err);
                return null;
            }
            return res.json(notes);
        });
    },

    newNote: function (req, res) {
        var note = new Note({
            noteText: req.body.noteText
        });
        console.log(note);
        note.save(function (err, result) {
            if (err) {
                console.log("There were errors in the submission");
                console.log(err);
                return err;
            }
            else {
                // db save was successful
                console.log("successfully added a document!");
                return res.json(result);
            }
        });
    }
}