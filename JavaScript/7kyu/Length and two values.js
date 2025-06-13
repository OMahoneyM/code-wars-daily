// Description:
// --------------------------------------
// Given an integer n and two other values, build an array of size n filled with these two values alternating.
// Examples

// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []


// Solution:
// --------------------------------------
function alternate(n, firstValue, secondValue){
    return new Array(n).fill(firstValue).map((e, i) => (i % 2) ? e = secondValue : e)
}

console.log(alternate(5, true, false), [true, false, true, false, true])