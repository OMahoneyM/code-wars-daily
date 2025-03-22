// Description:
// --------------------------------------
// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.


// Solution:
// --------------------------------------
function evenLast(numbers) {
    let last = numbers[numbers.length - 1]
    return numbers.filter((e, i) => i % 2 === 0).reduce((a, c) => a + (c * last), 0)
}

console.log(evenLast([2, 3, 4, 5]), 30)
console.log(evenLast([]), 0)