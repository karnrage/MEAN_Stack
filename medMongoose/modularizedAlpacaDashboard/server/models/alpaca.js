var mongoose = require('mongoose');

//wrapping the route in a function


var alpacaSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String,
    age: { type: Number, min: 1, max: 600 },
//  }           { timestamps : {createdAt: 'createdAt', updatedAt: 'updatedAt'}
});

mongoose.model('Alpaca', alpacaSchema);
//closing the module . exports fxn
