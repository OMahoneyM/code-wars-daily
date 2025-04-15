// Description:
// --------------------------------------
// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]

// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!


// Solution:
// --------------------------------------
function solve(arr){
    let maxNums = arr.sort((a, b) => b - a).slice(0, Math.ceil(arr.length / 2))
    let minNums = arr.sort((a, b) => a - b).slice(0, Math.floor(arr.length / 2))
    let result = []

    for (let i = 0; i < maxNums.length; i++){
        result.push(maxNums[i])
        if (minNums[i]) {
            result.push(minNums[i])
        }
    }

    return result
};

console.log(solve([15,11,10,7,12]), [15,7,12,10,11])


// Alt Solution:
// --------------------------------------
function solve(arr){
    let result = []
    arr.sort((a, b) => a - b)

    for (let i = 0, j = arr.length - 1; i <= j; i++, j--){
        if (i != j) {
            result.push(arr[j])
            result.push(arr[i])
        } else {
            result.push(arr[i])
        }
    }

    return result
}

console.log(solve([15,11,10,7,12]), [15,7,12,10,11])
