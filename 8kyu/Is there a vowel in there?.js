// Description:
// --------------------------------------
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


// Solution:
// --------------------------------------
function isVow(a){
    return a.map(e => {
        if (e == 97) return 'a'
        if (e == 101) return 'e'
        if (e == 105) return 'i'
        if (e == 111) return 'o'
        if (e == 117) return 'u'
        return e
    })
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])) //[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]


// Alt Solution:
// --------------------------------------
const isVow = a => a.map(x => 'aeiou'.includes(y = String.fromCharCode(x)) ? y : x)