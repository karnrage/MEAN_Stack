var mongoose = require('mongoose');

const taskController = {
    index: (request, response) => {
  
      Task.find({})
        .then(tasks => response.json(tasks))
        .catch(error => console.log(error));
  
    },
    create: (request, response) => {
  
      Task.create(request.body)
        .then(task => response.json(task))
        .catch(error => console.log(error));
  
    }
  };