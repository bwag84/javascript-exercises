const add = function(a,b) {
  return a + b;
	
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a,b) {
	//insert a sum function here for a javascript calculator. Make sure it can summ a real array of numbers
  return a.reduce((total, current) => total + current, 0);

};

const multiply = function(array) {
  //insert a function that multiplies and can take multiple arguments
  return array.reduce((product, current) => product * current);
};


const power = function(a,b) {
  return a ** b;
	
};

//iterative factorial function, faster than recursive
const factorial = function (n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};




// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
