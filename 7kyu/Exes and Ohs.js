// Description:
// --------------------------------------
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// Solution:
// --------------------------------------
function XO(str){
    //change str to all lowercase
    str = str.toLowerCase()
    //set a variable for x and o and set to 0
    let x = 0, o = 0;
    //loop through string
    for (let letter of str){
        //check if letter is x/o
        //add to variable if true
        if (letter === 'x') x++
        if (letter === 'o') o++
    }
    // return x === o
    return x === o
}

console.log(XO('xXoO')) //true
console.log(XO('xXmoO')) //true
console.log(XO('xoO')) //false