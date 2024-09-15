// Description:
// --------------------------------------
// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"


// Solution:
// --------------------------------------
function spacify(str) {
    //split the string and join it with spaces
    return str.split('').join(' ');
}

console.log(spacify('hello world')) //'h e l l o   w o r l d'
console.log(spacify('12345')) //'1 2 3 4 5'