// Description:
// --------------------------------------
// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.
// Example

// 123  => 6
// 223  => 7
// 1337 => 14


// Solution:
// --------------------------------------
function getSumOfDigits(integer) {
    return String(integer).split("").reduce((acc, cur) => acc + +cur, 0);
}

console.log(getSumOfDigits(123), 6)


// Alt Solution:
// --------------------------------------
function getSumOfDigits(integer) {
  var sum = null;
  var digits =  Math.floor(integer).toString();
  for(var ix = 0; ix < digits.length; ix++) {
    sum += +digits[ix];
  }
  return sum;
}

console.log(getSumOfDigits(123), 6)