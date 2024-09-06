// Description:
// --------------------------------------
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
// Notes :

//     Array/list size is at least 3 .

//     Array/list numbers could be a mixture of positives , negatives and zeros .

//     Repetition of numbers in the array/list could occur , So (duplications are not included when summing).


// Solution:
// --------------------------------------
function maxTriSum(num) {
    return num.filter((el, idx, arr) => arr.indexOf(el) === idx).sort((a, b) => a - b).slice(-3).reduce((acc, cur) => acc + cur, 0);
}

console.log(maxTriSum([3,2,6,8,2,3])) //17