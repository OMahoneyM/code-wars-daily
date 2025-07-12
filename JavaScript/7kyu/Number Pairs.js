// Description:
// --------------------------------------
// In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.

// Note: Both arrays have the same dimensions.
// Example:

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]


// Solution:
// --------------------------------------
function getLargerNumbers(a, b) {
    let result = []
    for (let i = 0; i < a.length; i++){
        result.push(Math.max(a[i], b[i]))
    }
    return result
}

console.log(getLargerNumbers(arr1, arr2), [23, 64, 53, 17, 88])