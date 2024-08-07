// Description:
// -------------------------------------- 
// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example

// [2, 1, 10]  -->  9

// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).


// Solution:
// --------------------------------------
function sumOfDifferences(arr) {
    return arr
            .sort((a, b) => b - a)
            .map((e, i, arr) => e - arr[i + 1])
            .slice(0, -1)
            .reduce((a, c) => a + c, 0)
}

console.log(sumOfDifferences([2,1,10])) //9


// Alt Solution:
// --------------------------------------
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
};