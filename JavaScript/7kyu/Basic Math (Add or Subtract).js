// Description:
// --------------------------------------
// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.
// Examples

// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"


// Solution:
// --------------------------------------
function calculate(str) {
    return eval(str.replace(/plus/g, '+').replace(/minus/g, '-')).toString()
}

console.log(calculate('1plus2plus3plus4'), '10')
console.log(calculate('1minus2minus3minus4'), '-8')
console.log(calculate('1plus2plus3minus4'), '2')


// Alt Solution:
// --------------------------------------
function calculate(str) {
    return str.split("plus").join(" ").split("minus").join(" -").split(' ').reduce((acc, cur) => acc + +cur, 0).toString()
}

console.log(calculate('1plus2plus3plus4'), '10')
console.log(calculate('1minus2minus3minus4'), '-8')
console.log(calculate('1plus2plus3minus4'), '2')
