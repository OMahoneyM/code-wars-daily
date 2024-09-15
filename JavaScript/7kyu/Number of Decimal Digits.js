// Description:
// --------------------------------------
// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.


// Solution:
// --------------------------------------
const digits = n => String(n).split('').reduce((a, c) => a + c ** 0, 0);

console.log(digits(123)) //3


// Alt Solution:
// --------------------------------------
function digits(n) {
    return n.toString().length;
}