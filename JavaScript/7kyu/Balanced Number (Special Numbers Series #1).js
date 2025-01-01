// Description:
// --------------------------------------
// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.
// The task

// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.


// Solution:
// --------------------------------------
function balancedNum(num) {
    let numStr = String(num)
    let left = []
    let right = []
    if(numStr.length < 3) {
        return "Balanced"
    } else if (numStr.length % 2 === 0) {
        left = numStr.slice(0, numStr.length / 2 - 1)
        right = numStr.slice(numStr.length / 2 + 1)
    } else {
        left = numStr.slice(0, Math.floor(numStr.length / 2))
        right = numStr.slice(Math.ceil(numStr.length / 2))
    }
    return (left.split("").reduce((a,c) => a + +c, 0) === right.split("").reduce((a,c) => a + +c, 0)) ? "Balanced" : "Not Balanced"
}

console.log(balancedNum(7), "Balanced")
console.log(balancedNum(10), "Balanced")
console.log(balancedNum(208), "Not Balanced")
console.log(balancedNum(56239814), "Balanced")
console.log(balancedNum(10738), "Not Balanced")