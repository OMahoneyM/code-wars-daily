// Description:
// --------------------------------------
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
// Notes

//     Array/list size is at least 3 .

//     Array/list's numbers Will be mixture of positives and negatives also zeros_

//     Repetition of numbers in the array/list could occur.

//     The Maximum Gap is computed Regardless the sign.

// Solution:
// --------------------------------------
function maxGap (arr) {
    let result = 0;
    arr = arr.sort ((a, b) => b - a)
    for (let i = 0; i < arr.length - 1; i++) {
        if (result < arr[i] - arr[i + 1])
            result = arr[i] - arr[i + 1]
    }

    return result;
}
console.log(maxGap([13,10,2,9,5]), 4)
console.log(maxGap([13,3,5]), 8)
console.log(maxGap([-3,-27,-4,-2]), 23)