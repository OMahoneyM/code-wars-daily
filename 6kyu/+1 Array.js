// Description:
// --------------------------------------
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

//     the array can't be empty
//     only non-negative, single digit integers are allowed

// Return nil (or your language's equivalent) for invalid inputs.
// Examples

// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer


// My Solution that doesn't work:
// --------------------------------------
function upArray(arr) {
    if (arr.length < 1 || arr.some(el => el < 0 || el > 9)) return null;

    arr = arr.join('')
    let result = String(+arr + 1)
    while (result.length < arr.length) {
        result = '0' + result
    }
    return result.split('').map(e => +e)
}

console.log(upArray([4,3,2,5])) //[4,3,2,6]
console.log(upArray([9,9,9,9])) //[1,0,0,0,0]
console.log(upArray([0,7])) //[0,8]
console.log(upArray([4,-3])) //null
console.log(upArray([4,33])) //null


//Actual Solution:
// --------------------------------------
function upArray(arr) {
    if (arr.length < 1 || arr.some(e => e < 0 || e > 9)) return null;

    let i = arr.length - 1;
    while (i >= 0 && arr[i] == 9) {
        arr[i--] = 0;
    }if (i < 0) {
        arr.unshift(1);
    }else {
        arr[i]++;
    }return arr;
}