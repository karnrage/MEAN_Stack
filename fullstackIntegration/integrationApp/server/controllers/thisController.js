var mongoose = require('mongoose'),
    Note = mongoose.model('Note');

    module.exports = {
        create: function(req, res){
            console.log("===== Hit Post Route =====")
            Note.create(req.body).then( note => res.json(note) ).catch( error => console.log(error) )
        },
        getAll: function(req, res){
            Note.find({}).sort('-createdAt').then( allNotes => res.json(allNotes) ).catch( error => console.log(error) )
        }
    }

// const taskController = {
//     index: (request, response) => {
  
//       Task.find({})
//         .then(tasks => response.json(tasks))
//         .catch(error => console.log(error));
  
//     },
//     create: (request, response) => {
  
//       Task.create(request.body)
//         .then(task => response.json(task))
//         .catch(error => console.log(error));
  
//     }
//   };