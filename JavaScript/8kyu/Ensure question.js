// Description:
// --------------------------------------
// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"


// Solution:
// --------------------------------------
const ensureQuestion = s =>  s.endsWith("?") ? s : s + "?";

console.log(ensureQuestion("Hello"), "Hello?")
console.log(ensureQuestion("No?"), "No?")