// Description:
// --------------------------------------
// Definition
// An element is leader if it is greater than The Sum all the elements to its right side.

// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.

// Notes
//     Array/list size is at least 3 .

//     Array/list's numbers Will be mixture of positives , negatives and zeros

//     Repetition of numbers in the array/list could occur.

//     Returned Array/list should store the leading numbers in the same order in the original array/list .


// Solution:
// --------------------------------------
function arrayLeaders(nums) {
    //declare result variable and assign to empty array
    let result = [];
    //loop through array
    for (let i = 0; i < nums.length; i++){
        //declare variable to contain sum of slice from i+1 to -1
        let sumSlice = nums.slice(i + 1, nums.length).reduce((a,c) => a + c, 0);
        //if nums[i] > sum variable
        if (nums[i] > sumSlice){
            //push value to result array
            result.push(nums[i]);
        }
    }
    //return result
    return result;

}

console.log(arrayLeaders([1,2,3,4,0]), [4])
console.log(arrayLeaders([16,17,4,3,5,2]), [17,5,2])
console.log(arrayLeaders([-36,-12,-27]), [-36,-12])