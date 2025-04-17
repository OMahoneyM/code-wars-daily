// Description:
// --------------------------------------
// Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

// For example:

// [ 1, 2, 3] ==> 6

// [ 1, 3, 8, 1, 8] ==> 12

// [ -1, -1, 5, 2, -7] ==> -1

// [] ==> null

// Good Luck!


// Solution:
// --------------------------------------
function uniqueSum(lst){
    if (lst.length === 0) { return null }
    return lst.filter((e, i, arr) => arr.indexOf(e) === i).reduce((a, c) => a + c, 0)
}

console.log(uniqueSum([1,2,3]), 6)
console.log(uniqueSum([1,3,8,1,8]), 12)
console.log(uniqueSum([-1,-1,5,2,-7]), -1)
console.log(uniqueSum([]), null)


// Alt Solution:
// --------------------------------------
function uniqueSum(lst) {
    return [...new Set(lst)].reduce((a, c) => a + c, null)
}

console.log(uniqueSum([1,2,3]), 6)
console.log(uniqueSum([1,3,8,1,8]), 12)
console.log(uniqueSum([-1,-1,5,2,-7]), -1)
console.log(uniqueSum([]), null)
