

// - - - - = = = = Configurations = = = = - - - - 

// Express
const express = require('express');
const app = express();

// Path
const path = require('path');

// Body Parser
var bodyParser = require('body-parser');
// Session
var session = require('express-session');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// CORS
// const cors = require('cors');
// app.use(cors());

// Static Directory
app.use(express.static(__dirname + '/angApp/dist'));

// Body Parser 
const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// Morgan (optional)
// let morgan = require("morgan");
// app.use(morgan('dev'));

//inserted below for modularization
app.use(session({secret: 'codingdojorocks'}));
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(__dirname + '/client/static'));

// app.set('views', __dirname + '/client/views'); 


// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

app.all("*", (request, response) => { res.sendFile(path.resolve("./angApp/dist/index.html") )});

// - - - - = = = = Model = = = = - - - - 
// const uniqueValidator = require('mongoose-unique-validator');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/task-api');
// mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
// mongoose.Promise = global.Promise;
// const { Schema } = mongoose;
// const taskSchema = new Schema({
//   title: {
//     type: String,
//     trim: true,
//     required: [true, 'Task title is required'],
//     minlength: [5, 'Task title length must be greater than 5'],
//     unique: true
//   },
//   description: {
//     type: String,
//     trim: true,
//     default: ''
//   },
//   completed: {
//     type: Boolean,
//     required: true,
//     default: false
//   },
// }, {
//   timestamps: true
// });
// taskSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
// const Task = mongoose.model('Task', taskSchema);




// - - - - = = = = Controller = = = = - - - - 
// const taskController = {
//   index: (request, response) => {

//     Task.find({})
//       .then(tasks => response.json(tasks))
//       .catch(error => console.log(error));

//   },
//   create: (request, response) => {

//     Task.create(request.body)
//       .then(task => response.json(task))
//       .catch(error => console.log(error));

//   }
// };




// - - - - = = = = Routes = = = = - - - - 
// app 
// .get('/tasks', taskController.index)
// .post('/tasks', taskController.create)




// - - - - = = = = ALTERNATE FOR: Routes+Controllers = = = = - - - - 
// app 
// .get('/tasks', (request, response) => {
  
//   Task.find({})
//     .then(tasks => response.json(tasks))
//     .catch(error => console.log(error));  

// })
// .post('/tasks', (request, response) => {
  
//   Task.create(request.body)
//     .then(task => response.json(task))
//     .catch(error => console.log(error));

// })



// - - - - = = = = Server Listener = = = = - - - - 
const port = 5000;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));