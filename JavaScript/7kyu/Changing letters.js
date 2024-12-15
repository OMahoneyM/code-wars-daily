// Description:
// --------------------------------------
// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.


// Solution:
// --------------------------------------
const swap = str => str.replace(/[aeiou]/g, e => e.toUpperCase());

console.log(swap('Hello World!'), 'HEllO WOrld!')