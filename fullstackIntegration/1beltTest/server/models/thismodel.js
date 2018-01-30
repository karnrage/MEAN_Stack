// // const uniqueValidator = require('mongoose-unique-validator');
// const mongoose = require('mongoose');
// // mongoose.connect('mongodb://localhost/task-api');
// // mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
// mongoose.Promise = global.Promise;
// const { Schema } = mongoose;
// const NoteSchema = new Schema({
//   text: {
//     type: String,
//     trim: true,
//     required: [true, 'Note is required'],
//     minlength: [5, 'Note length must be greater than 3'],
    
//   },
// }, {
//   timestamps: true
// });
// mongoose.model('Note', NoteSchema);
// // taskSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
// const Note = mongoose.model('Note');

// // const Note = mongoose.model('Note', NoteSchema); why not passs in the NoteSchema?

var mongoose = require('mongoose');

var TriviaSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    }
},{ timestamps: true });

mongoose.model('Trivia', TriviaSchema);
var Trivia = mongoose.model('Trivia')