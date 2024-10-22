// Function to convert Fahrenheit to Celsius
function convertToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9);
  return Math.round(celsius * 10) / 10;  // Round to one decimal place
}

// Function to convert Celsius to Fahrenheit
function convertToFahrenheit(celsius) {
  let fahrenheit = (celsius * (9/5)) + 32;
  return Math.round(fahrenheit * 10) / 10;  // Round to one decimal place
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
