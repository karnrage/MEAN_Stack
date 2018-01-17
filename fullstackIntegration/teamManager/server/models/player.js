var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// why? above

var PlayerSchema = new mongoose.Schema({
    position: {
        type: String,
        // required: true,
        minlength: 2,
        maxlength: 20,
        trim: true,
        validate: {
                validator: function (value) {
                    return /^([^'"]+)$/.test(value);
                },
                message: "Position cannot contain quotes."
            },
        alias: "Position"
    },
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20,
        trim: true,
        validate: {
                validator: function (value) {
                    return /^([^'"]+)$/.test(value);
                },
                message: "Name cannot contain quotes."
            },
        alias: "Name"
    }
},{ timestamps: true });

mongoose.model('Player', PlayerSchema);
var Note = mongoose.model('Player')