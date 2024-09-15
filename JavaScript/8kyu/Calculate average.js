// Description:
// --------------------------------------
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


// Solution:
// --------------------------------------
const findAverage = array => array.length != 0 ? array.reduce((acc, current) => acc + current, 0) / array.length : 0;
    


console.log(findAverage([0]))
console.log(findAverage([1,1,1])) // 1
console.log(findAverage([1,2,3])) // 2
console.log(findAverage([1,2,3,4])) // 2.5