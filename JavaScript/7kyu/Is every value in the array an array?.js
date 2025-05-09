// Description:
// --------------------------------------
// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false


// Solution:
// --------------------------------------
const arrCheck = value => value.every(e => Array.isArray(e));

console.log(arrCheck([[1],[2]]), true)
console.log(arrCheck([1,2]), false)
console.log(arrCheck(["string1", "string2"]), false)