// Description:
// --------------------------------------
// Compare two strings by comparing the sum of their values (ASCII character code).

//     For comparing treat all letters as UpperCase
//     null/NULL/Nil/None should be treated as empty strings
//     If the string contains other characters than letters, treat the whole string as it would be empty

// Your method should return true, if the strings are equal and false if they are not equal.


// Solution:
// --------------------------------------
function exceptionCheck(str) {
    if (str === null || !str) return "";

    str = str.toUpperCase().split('').map(e => /[^A-Z]/.test(e) ? "x" : e.charCodeAt())

    if (str.includes("x")) return "";

    return str.reduce((acc, cur) => acc + cur, 0);
}

function compare(s1, s2) {
    return exceptionCheck(s1) === exceptionCheck(s2);
}

console.log(compare("ad", "BC"), true)
console.log(compare("AD", "DD"), false)
console.log(compare("AD1", ""), true)
console.log(compare(null, ""), true)
console.log(compare("!!", "7476"), true)
