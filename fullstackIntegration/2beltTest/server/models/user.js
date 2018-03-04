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

