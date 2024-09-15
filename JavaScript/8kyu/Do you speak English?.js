// Description:
// --------------------------------------
// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.


// Solution:
// --------------------------------------
function spEng(sentence){
    let exp = new RegExp('english')
    return exp.test(sentence.toLowerCase());
}

console.log(spEng("abcEnglishdef")) //true
console.log(spEng("abcnEglishsef")) //false


// Better Solution:
// --------------------------------------
function spEng(s) {
    return /english/i.test(s)
}