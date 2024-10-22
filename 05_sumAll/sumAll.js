
function sumAll(num1, num2) {
    // Check if both arguments are positive integers
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
      return "ERROR";
    }
  
    // Initialize sum to hold the outcome
    let sum = 0;
  
    // If num1 is greater than num2, swap them using temp
    if (num1 > num2) {
      let temp = num1;
      num1 = num2;
      num2 = temp;
    }
  
    // Loop from num1 to num2 and add each number to sum
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
  
    // Return the final sum
    return sum;
  }

// Do not edit below this line
module.exports = sumAll;


//write a JavaScript function called sumAll
//it takes two arguments, num1 and num2
//first test to see if both arguments are positive integers
//if not, return ERROR
//if num1 is larger than num2, swap them around using a temporary variable called temp
//num1 becomes temp
//num1 becomes num2
//use num1 to loop until temp
//the function then returns the sum of every integer between num1 and num2
//e.g. sumAll(1,4) returns 1+2+3+4 = 10
//write an empty variable called sum to hold the outcome
//return sum