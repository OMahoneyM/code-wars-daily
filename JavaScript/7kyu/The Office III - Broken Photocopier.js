// Description:
// --------------------------------------
// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.


// Solution:
// --------------------------------------
const broken = x => x.split('').map(e => e === "1" ? "0" : "1").join('');

console.log(broken("1"), "0")
console.log(broken("111000"), "000111")
console.log(broken("101010"), "010101")