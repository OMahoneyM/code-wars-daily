// Description:
// --------------------------------------
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// Solution:
// --------------------------------------
function countPositivesSumNegatives(input) {
    let result = []
    if ((input == null) || (input.length == 0)){
        return result
    }

    result[0] = input.filter(item => Math.sign(item) === 1).length

    result[1] = input.filter(item => Math.sign(item) === -1).reduce((acc, current) => acc + current, 0)

    return result
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))


// Simplier Solution:
// --------------------------------------
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}