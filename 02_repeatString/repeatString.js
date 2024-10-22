const repeatString = function (string, num) {
    // Check if 'string' is not a string, return "ERROR"
    if (typeof string !== 'string') {
      return "ERROR";
    }
  
    // Check if 'num' is not a positive integer, return "ERROR"
    if (!Number.isInteger(num) || num < 0) {
      return "ERROR";
    }
  
    // Initialize an empty result string
    let result = '';
  
    // Loop to repeat the string 'num' times
    for (let i = 0; i < num; i++) {
      result += string;  // Append 'string' to 'result' with no spaces
    }
  
    // Return the final concatenated result
    return result;
  };
    



// Do not edit below this line
module.exports = repeatString;

