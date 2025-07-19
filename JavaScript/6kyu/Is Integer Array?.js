// Description:
// --------------------------------------
// Write a function that:

//     returns true  / True if every element in an array is an integer or a float with no decimals.
//     returns true  / True if array is empty.
//     returns false / False for every other input.


// Solution:
// --------------------------------------
function isIntArray(arr) {
    return Array.isArray(arr) && arr.every(e => Number.isInteger(e))
}

console.log(isIntArray([10, 2, 3, 4]), true)
console.log(isIntArray([1.0, 2.0, 3.0]), true)
console.log(isIntArray([1.0, 2.1, 3.0]), false)
console.log(isIntArray([1, 2, 3, "4"]), false)
console.log(isIntArray([]), true)
console.log(isIntArray(true), false)