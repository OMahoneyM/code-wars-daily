// Description:
// --------------------------------------
// Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.
// Example

// [4, 8, 6] --> 2
// Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

// [-1, -5] --> 3
// Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

// [1] --> 0
// []  --> 0


// Solution:
// --------------------------------------
function consecutive(arr){
    let count = 0;

    if (arr.length < 2) return count;

    let arrSorted = arr.sort((a, b) => a - b)
    for (let i = 0; i < arrSorted.length - 1; i++){
        count += Math.abs(arrSorted[i + 1] - arrSorted[i]) - 1
    }

    return count;
}
console.log(consecutive([]), 0)
console.log(consecutive([10]), 0)
console.log(consecutive([4,8,6]), 2)
console.log(consecutive([-1, -5]), 3)


// Alt Solution:
// --------------------------------------
function consecutive(arr){
    let arrLen = arr.length;
    return arrLen ? Math.max(...arr) - Math.min(...arr) - arrLen + 1 : 0;
}
console.log(consecutive([]), 0)
console.log(consecutive([10]), 0)
console.log(consecutive([4,8,6]), 2)
console.log(consecutive([-1, -5]), 3)
