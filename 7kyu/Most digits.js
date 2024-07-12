// Description:
// -------------------------------------- 
// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.


// Solution:
// --------------------------------------
function findLongest(array){
    return array.reduce((a, b) => String(b).length > String(a).length ? b : a)
}

console.log(findLongest([1, 10, 100])) //100
console.log(findLongest([700, 10, 900])) //700