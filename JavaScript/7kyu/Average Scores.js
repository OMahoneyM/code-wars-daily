// Description:
// --------------------------------------
// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// The array will never be empty.


// Solution:
// --------------------------------------
function average(scores) {
    return Math.round(scores.reduce((a,c) => a + c, 0) / scores.length);
}

console.log(average([49,3,5,300,7]), 73)