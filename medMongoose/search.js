// Require and module.exports are the two most important tools when modularizing your
//  code. Make sure to fully understand these before moving on to the next sections

// In search.js we require dictionary.js; here, require is a function that takes in a 
// parameter. The parameter is the location of the file we are requiring.
// Require first executes the code in the file and then passes back the value inside of module.exports as a return value.
var dictionary = require('./dictionary.js');
function search(word, dictionary) {
  for(w in dictionary) {
    if(dictionary[w] == word) {
      return true;
    }
  }
  return false;
}
