// Description:
// --------------------------------------
// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series

// Task

// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes

// - Array/list size is at least 3 .
// - Array/list's numbers Will be mixture of positives , negatives and zeros
// - Repetition of numbers in the array/list could occur.


// Solution:
// --------------------------------------
function maxProduct(nums, size){
    return nums.sort((a, b) => a - b).slice(-size).reduce((a, c) => a * c, 1);
}

console.log(maxProduct([4,3,5], 2)) //20
console.log(maxProduct([10,8,7,9], 3)) //720
console.log(maxProduct([8,6,4,6], 3)) //288