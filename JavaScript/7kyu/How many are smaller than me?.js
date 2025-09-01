// Description:
// --------------------------------------
// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

// If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?


// Solution:
// --------------------------------------
function smaller(nums) {
  let result = []
  for(let i = 0; i < nums.length; i++){
    let num = nums[i]
    let count = 0
    nums.slice(i + 1).forEach(e => (e < num) ? count++ : count)
    
    result.push(count)
    
  }
  return result
}


// Alt Solution:
// --------------------------------------
function smaller(nums) {
    return nums.map((e, i) => nums.slice(i).filter(el => el < e).length)
}