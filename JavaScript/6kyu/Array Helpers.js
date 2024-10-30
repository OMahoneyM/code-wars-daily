// Description:
// --------------------------------------
// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

//     square() must return a copy of the array, containing all values squared
//     cube() must return a copy of the array, containing all values cubed
//     average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
//     sum() must return the sum of all array values
//     even() must return an array of all even numbers
//     odd() must return an array of all odd numbers

// Note: the original array must not be changed in any case!


// Solution:
// --------------------------------------
Object.defineProperties(Array.prototype, {
    'square': {
        value: function(){ return this.map(e => e**2) }
    },
    'cube': {
        value: function(){ return this.map(e => e**3) }
    },
    'average': {
        value: function(){ return this.reduce((a, c) => a + c, 0) / this.length }
    },
    'sum': {
        value: function(){ return this.reduce((a, c) => a + c) }
    },
    'even': {
        value: function(){ return this.filter(e => e % 2 === 0) }
    },
    'odd': {
        value: function(){ return this.filter(e => e % 2 != 0) }
    }
})

let nums = [1,2,3,4,5]
console.log(nums.square(), [1,4,9,16,25])
console.log(nums.cube(), [1,8,27,64,125])
console.log(nums.average(), 3)
console.log(nums.sum(), 15)
console.log(nums.even(), [2,4])
console.log(nums.odd(), [1,3,5])

console.log([].average(), NaN)