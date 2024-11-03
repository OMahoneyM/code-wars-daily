// Description:
// --------------------------------------
// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.


// Solution:
// --------------------------------------
function hasUniqueChars(s) {
    let charSet = new Set(s)
    return charSet.size === s.length;
}

console.log(hasUniqueChars("aA"), true)
console.log(hasUniqueChars("aaBb"), false)
console.log(hasUniqueChars("++-"), false)
console.log(hasUniqueChars(""), true)