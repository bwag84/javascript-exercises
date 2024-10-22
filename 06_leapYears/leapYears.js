function leapYears(year) {
    // Check if year is a positive integer
    if (!Number.isInteger(year) || year <= 0) {
      return "ERROR";
    }
  
    // Leap year logic
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }

// Do not edit below this line
module.exports = leapYears;


//write a javascript function calledd leapYears
//that takes in an argument called year
//check the argument to make sure it is a positive integer
//return error if this is not the case
//if year can be divided
    //by 4 or 400
        //return TRUE
    //but if they can be divided by 100, return FALSE

