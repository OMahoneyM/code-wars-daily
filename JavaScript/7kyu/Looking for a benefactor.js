// Description:
// --------------------------------------
// Write a function that returns the number of occurrences of an element in an array.

// This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object (more info about that you can find on MDN).
// Examples

// var arr = [0, 1, 2, 2, 3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences(3) === 1;


// Solution:
// --------------------------------------
function newAvg(arr, nAvg) {
    let arrSum = arr.reduce((a, c) => a + c, 0)
    let nextGift = Math.ceil(nAvg * (arr.length + 1) - arrSum)
    if (nextGift > 0) {
        return nextGift
    } else {
        throw new Error("Expected New Average is too low")
    }
}

console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90), 628)
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92), 645)
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 2), "Expected New Average is too low")