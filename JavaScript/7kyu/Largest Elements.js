// Description:
// --------------------------------------
// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]


// Solution:
// --------------------------------------
function largest(n, arr) {
    return (n < 1) ? [] :  arr.sort((a, b) => a - b).slice(-n);
}

console.log(largest(2, [4,3,6,9,2,1]), [6,9])
console.log(largest(0, [4,3,6,9,2,1]), [])