var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// why? above

var BikeSchema = new mongoose.Schema({
    createdBy: { 
        type:String,
        // required: true,
        // minlength: 2,
        maxlength: 30,
        trim: true,
        alias: "Created By"
    },
    title: { 
        type:String,
        required: true,
        minlength: 2,
        maxlength: 30,
        trim: true,
        alias: "Title"
    },
    desc: { 
        type:String,
        required: true,
        minlength: 2,
        maxlength: 30,
        trim: true,
        alias: "Desc"
    },
    location: { 
        type:String,
        required: true,
        minlength: 2,
        maxlength: 30,
        trim: true,
        alias: "Location"
    },    
    price: { 
        type:Number,
        required: true,
        minlength: 2,
        maxlength: 30,
        trim: true,
        alias: "Price"
    },
    _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
},
{ timestamps: true }
);

mongoose.model('Bike', BikeSchema);
var Note = mongoose.model('Bike')

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