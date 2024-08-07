// Description:
// --------------------------------------
// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
// Examples

// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL


// Solution:
// --------------------------------------
function array(str){
    let arr = str.split(',')

    if (arr.length < 3) return null

    return arr.slice(1, arr.length - 1).join(' ')
}

console.log(array('')) //null
console.log(array('1')) //null
console.log(array('A1,B1')) //null
console.log(array('1,2,3')) //2
console.log(array('1,2,3,4')) //2 3


// Alt Solution:
// --------------------------------------
function array(str){
    return arr.split(',').slice(1,-1).join(' ') || null;
}