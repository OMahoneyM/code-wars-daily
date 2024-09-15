// Description:
// --------------------------------------
// Task

// Given an array of integers, Find the minimum sum which is obtained from summing each Two integers product.

// Notes

//     Array/list will contain positives only.
//     Array/list will always have even size


// Solution:
// --------------------------------------
function minSum(arr) {
    let sum = 0;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length / 2; i++) {
        sum += arr[i] * arr[arr.length - i - 1]
    }
    return sum;
}

console.log(minSum([5,4,2,3])) //22
console.log(minSum([12,6,10,26,3,24])) //342
console.log(minSum([9,2,8,7,5,4,0,6])) //74


// Alt Solution:
// --------------------------------------
function minSUm(arr) {
    return arr.sort((a, b) => a - b)
              .slice(0, arr.length / 2)
              .reduce((acc, cur, idx) => acc += cur * arr[arr.length - idx - 1], 0);
}