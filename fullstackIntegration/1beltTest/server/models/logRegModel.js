var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

//wrapping the route in a function


var logRegSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: [true, "Missing; first name must be entered"],
        minlength: [2, "Short; first name must be at least two characters"],
        trim: true
    },
    lastName: { 
        type: String, 
        required: [true, "Missing; last name must be entered"], 
        minlength: [2, "Short; last name must be at least two characters"],
        trim: true
    },
    email: { 
        type: String, 
        required: [true, "Missing; email must be entered"],
        unique: true,
        validate: {
            validator: function(value){
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            },
            message: "Check, your characters; Email must be a valid email address"
        }
    },
    pass: { 
        type: String, 
        required: [true, "Missing; password must be entered"],  
        minlength: 2,
        validate: {
            validator: function(value){
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
            },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
    },
    bDay: { 
        type: Date, 
        required: [true, "Missing; birthday must be entered"],  
    },
},   
//old way ->>  }           { timestamps : {createdAt: 'createdAt', updatedAt: 'updatedAt'}
{ timestamps: true });

logRegSchema.pre('save', function (next) {
    console.log("=====save attempt=====");
//set condition to save ONLY IF passwords match, then next condition is to lowercase the email. NOT DONE

//if null will skip the password hashing!!!!!!!!!!!!
    bcrypt.hash(this.pass, 10).then(hashed_password => {
        console.log("====inside hasher======")
        console.log(hashed_password)
        this.pass = hashed_password;
        next() //This is were it finally saves to Mongo database
    }).catch(error => { 
        next()
    }); 


})

mongoose.model('logReg', logRegSchema);
var logReg = mongoose.model('logReg');
//closing the module . exports fxn
