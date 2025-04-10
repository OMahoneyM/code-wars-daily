// Description:
// --------------------------------------
// Task

// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
// Notes:

//     List size is at least 3.

//     All numbers will be positive.

//     Numbers could occur more than once , (Duplications may exist).

//     Threshold K will always be reachable.


// Solution:
// --------------------------------------
function minimumSteps(nums, k) {
    let sum = 0;
    let counter = -1;
    let sortedNums = nums.sort((a, b) => a - b)
    
    for (let i = 0; i < nums.length; i++){
        if (k > sum){
            sum += sortedNums[i]
            counter++
        }
    }

    return counter;
}

console.log(minimumSteps([1,2,3,4,5], 6), 2)



// Alt Solution:
// --------------------------------------
function minimumSteps(nums, k){
    return nums.sort((a, b) => a - b).filter(e => (k -= e) > 0).length
}

console.log(minimumSteps([1,2,3,4,5], 6), 2)
