// Description:
// --------------------------------------
// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]

// the function should return :

// [1,4,3,8]
    
              
// Solution:
// --------------------------------------
function doubleEveryOther(arr){
    return arr.map((el, idx) => idx % 2 ? el * 2 : el)
}

console.log(doubleEveryOther([1,2,3,4]), [1,4,3,8])