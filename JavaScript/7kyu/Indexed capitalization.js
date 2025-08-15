// Description:
// --------------------------------------
// Given a string of lowercase letters and an array of integer indices, capitalize all letters at the given indices. If an index is beyond the string, it should be ignored.
// Examples:

// "abcdef", [1,2,5]     ==> "aBCdeF"
// "abcdef", [1,2,5,100] ==> "aBCdeF" // There is no index 100.


// Solution:
// --------------------------------------
function capitalize(str, indices) {
    return str.split('').map((e, i) => (indices.includes(i)) ? e.toUpperCase() : e).join('');
}

console.log(capitalize("abcdef", [1,2,5]), "aBCdeF")
console.log(capitalize("abcdef", [1,2,5, 100]), "aBCdeF")