function removeFromArray(array, ...num) {
    // Filter out the elements that match any of the 'num' values
    return array.filter(item => !num.includes(item));
  }

  
// Do not edit below this line
module.exports = removeFromArray;


//write a javascript function ccalled removeFromArray
//it takes two arguments, array and ..num
//this function removes an element from the array that matches num
//for example, if num is 3, 3 will be removed from the array [1,2,3,4]
//return what is left of the array, in this example [1,2,4]