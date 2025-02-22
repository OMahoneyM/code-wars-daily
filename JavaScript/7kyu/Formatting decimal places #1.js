// Description:
// --------------------------------------
// Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Don't round the numbers! Just cut them after two decimal places!


// Solution:
// --------------------------------------
function twoDecimalPlaces(num) {
    return parseInt(num * 100) / 100
}

console.log(twoDecimalPlaces(32.8493), 32.84)
console.log(twoDecimalPlaces(-32.8439), -32.84)


// Alt Solution:
// --------------------------------------
function twoDecimalPlaces(num) {
    return Math.trunc(num * 100) / 100
}

console.log(twoDecimalPlaces(32.8493), 32.84)
console.log(twoDecimalPlaces(-32.8439), -32.84)