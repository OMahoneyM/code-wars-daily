// Description:
// --------------------------------------
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.


// Solution:
// --------------------------------------
function smallEnough(a, limit){
    return a.every(e => e <= limit);
}

console.log(smallEnough([66, 101], 200)) //true
console.log(smallEnough([66, 101, 204], 200)) //false


// Alt Solution:
// --------------------------------------
function smallEnough(a, limit){
    return Math.max(...a) <= limit
}