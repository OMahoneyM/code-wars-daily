// Description:
// --------------------------------------
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


// Solution:
// --------------------------------------
const take = (arr, n) => arr.filter((e,i) => i < n);

console.log(take([0,1,2,3,4,5,6], 3)) //[0,1,2]


// Alt Solution:
// --------------------------------------
function take(arr, n){
    return arr.slice(0, n);
}