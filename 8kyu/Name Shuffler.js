// Description:
// --------------------------------------
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"


// Solution:
// --------------------------------------
const nameShuffler = str => str.split(' ').reverse().join(' ');

console.log(nameShuffler('john McClane'))