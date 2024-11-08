// Description:
// --------------------------------------
// Implement a function that returns the minimal and the maximal value of a list (in this order).


// Solution:
// --------------------------------------
const getMinMax = arr => [Math.min(...arr), Math.max(...arr)];

console.log(getMinMax([1]), [1,1])
console.log(getMinMax([2,1]), [1,2])