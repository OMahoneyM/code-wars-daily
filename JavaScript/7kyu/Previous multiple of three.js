// Description:
// --------------------------------------
// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.
// Examples

// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9


// Solution:
// --------------------------------------
const prevMultOfThree = n => {
    if (n === 0) { return null };
    if (n % 3 === 0) { return n };
    return prevMultOfThree(+n.toString().slice(0, -1))
}

console.log(prevMultOfThree(3), 3)
console.log(prevMultOfThree(1), null)
console.log(prevMultOfThree(25), null)
console.log(prevMultOfThree(36), 36)
console.log(prevMultOfThree(1244), 12)
console.log(prevMultOfThree(952406), 9)

// Alt Solution:
// --------------------------------------
function prevMultOfThree (n) {
    return n < 3 ? null : n % 3 ? prevMultOfThree(Math.floor(n / 10)) : n
}

console.log(prevMultOfThree(3), 3)
console.log(prevMultOfThree(1), null)
console.log(prevMultOfThree(25), null)
console.log(prevMultOfThree(36), 36)
console.log(prevMultOfThree(1244), 12)
console.log(prevMultOfThree(952406), 9)