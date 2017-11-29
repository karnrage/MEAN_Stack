module.exports = {
    
      add: function(num1, num2) { 
           // add code here 
           console.log(num1 + num2);
      },
      multiply: function(num1, num2) {
           // add code here
           console.log(num1 * num2);
      },
      square: function(num) {
           // add code here
           console.log(num * num); 
      },
      random: function(num1, num2) {
           // add code here
           console.log("random:", Math.floor((Math.random()* (num2 - num1 +1) + num1)));
      }
   
  }
  