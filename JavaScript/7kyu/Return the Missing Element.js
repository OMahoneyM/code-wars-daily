// Description:
// --------------------------------------
// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.
// Examples:

// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3


// Solution:
// --------------------------------------
function getMissingElement(arr){
    let result = 0
    arr = arr.sort((a, b) => a - b)

    for (let i = 0; i <= arr.length; i++){
        if (i === arr[i]) result++
    }
    return result
}

console.log(getMissingElement([0,5,1,3,2,9,7,6,4]), 8)
console.log(getMissingElement([9,2,4,5,7,0,8,6,1]), 3)


// Alt Solution:
// --------------------------------------
function getMissingElement(arr){
    for (let i = 0; i < 10; i++) {
        if (arr.indexOf(i) === -1) return i;
    }
}

console.log(getMissingElement([0,5,1,3,2,9,7,6,4]), 8)
console.log(getMissingElement([9,2,4,5,7,0,8,6,1]), 3)
console.log(getMissingElement([3,2,4,5,7,0,8,6,1]), 9)
