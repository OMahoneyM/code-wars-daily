// Description:
// --------------------------------------
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"


// Solution:
// --------------------------------------
function replace(s){
    let vowels = 'aeiouAEIOU'
    return s.split('').map(el => vowels.includes(el) ? '!' : el).join('')   
}

console.log(replace("Hi!")) //"H!!"
console.log(replace("!Hi! Hi!")) //"!H!! H!!"
console.log(replace("aeiou")) // "!!!!!"
console.log(replace("ABCDE")) //"!BCD!"


// RegEx Solution:
// --------------------------------------
const replace = s => s.replace(/[aeiou]/ig,'!')