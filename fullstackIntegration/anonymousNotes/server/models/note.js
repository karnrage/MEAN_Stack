var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// why? above

var NoteSchema = new mongoose.Schema({
    noteText: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 200,
        trim: true,
        validate: {
                validator: function (value) {
                    return /^([^'"]+)$/.test(value);
                },
                message: "Notes cannot contain quotes."
            },
        alias: "Note"
    }
},{ timestamps: true });

mongoose.model('Note', NoteSchema);
var Note = mongoose.model('Note')