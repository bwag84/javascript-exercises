;// Write a function that takes in a string, removes spaces and punctuation, and checks if it is a palindrome
const palindromes = function (str) {
    // Remove spaces and punctuation from the string
    let cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    // Reverse the cleaned string
    let reversedStr = cleanedStr.split('').reverse().join('');
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === reversedStr;
};

console.log(palindromes('A man, a plan, a canal, Panama')); // true
console.log(palindromes('hello')); // false

// Do not edit below this line
module.exports = palindromes;

