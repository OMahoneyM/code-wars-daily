// Description:
// --------------------------------------
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


// Solution:
// --------------------------------------
function longest(s1, s2) {
    return s1.concat(s2).split('').filter((el, idx, arr) => arr.indexOf(el) === idx).sort().join('');
}

console.log(longest("aretheyhere", "yestheyarehere")) //"aehrsty"


// Alt Solution:
// --------------------------------------
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

console.log(longest("aretheyhere", "yestheyarehere")) //"aehrsty"
