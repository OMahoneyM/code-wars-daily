// Description:
// --------------------------------------
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)


// Solution:
// --------------------------------------
const getNumberFromString = s => +s.replace(/\D/g, "");

console.log(getNumberFromString("hello5 wor6ld"), 56)
console.log(getNumberFromString("123"), 123)
console.log(getNumberFromString("this is number: 7"), 7)