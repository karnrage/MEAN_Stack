var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// why? above

var UserSchema = new mongoose.Schema({
    first: { 
        type:String,
        required: true,
        minlength: 2,
        maxlength: 30,
        trim: true,
        alias: "First Name"
    },
    last: { 
        type:String,
        required: true,
        minlength: 2,
        maxlength: 30,
        trim: true,
        alias: "Last Name"
    },
    email: { 
        type:String,
        required: true,
        minlength: 2,
        maxlength: 30,
        trim: true,
        alias: "eMail"
    },
    password: { 
        type:String,
        required: true,
        minlength: 2,
        maxlength: 30,
        trim: true,
        alias: "Password"
    },
    _bike: [{type: mongoose.Schema.Types.ObjectId, ref: 'Bike'}]
},
{ timestamps: true }
);

mongoose.model('User', UserSchema);
var Note = mongoose.model('User')

// position: {
//     type: String,
//     // required: true,
//     minlength: 2,
//     maxlength: 20,
//     trim: true,
//     validate: {
//             validator: function (value) {
//                 return /^([^'"]+)$/.test(value);
//             },
//             message: "Position cannot contain quotes."
//         },
//     alias: "Position"
// },
// name: {
//     type: String,
//     required: true,
//     minlength: 2,
//     maxlength: 20,
//     trim: true,
//     validate: {
//             validator: function (value) {
//                 return /^([^'"]+)$/.test(value);
//             },
//             message: "Name cannot contain quotes."
//         },
//     alias: "Name"
// },
// g1: {type: String, required: false},
// g2: {type: String, required: false},
// g3: {type: String, required: false}