// Description:
// --------------------------------------
// Given an array of strings, write a function that returns an array containing only the elements of the given array whose length is an even number.
// Example

// ["One", "Two", "Three", "Four"] --> ["Four"]


// Solution:
// --------------------------------------
const filterEvenLengthWords = words => words.filter(e => !(e.length % 2))

console.log(filterEvenLengthWords(["one", "two", "three", "four"]), ["four"])