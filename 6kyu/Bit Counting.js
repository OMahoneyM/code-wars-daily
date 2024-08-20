// Description:
// --------------------------------------
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


// Solution:
// --------------------------------------
const countBits = n => {
    //convert number to binary string
    //split string into an array and reduce
    return n.toString(2).split('').reduce((acc, cur) => acc + +cur, 0);
}

console.log(countBits(1234)) //5
console.log(countBits(0)) //0
console.log(countBits(4)) //1