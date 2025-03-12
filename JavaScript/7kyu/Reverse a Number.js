// Description:
// --------------------------------------
// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
// Examples

//  123 ->  321
// -456 -> -654
// 1000 ->    1


// Solution:
// --------------------------------------
function reverseNumber(n) {
    n = String(n).split('').reverse().join('')

    if (n.endsWith('-')) {
        n = '-'+ n.slice(0, n.length - 1)
    }

    return +n
}

console.log(reverseNumber(123), 321)
console.log(reverseNumber(-123), -321)
console.log(reverseNumber(100), 1)


// Alt Solution:
// --------------------------------------
const reverseNumber = n => (n < 0 ? -1 : 1) * Math.abs(n).toString().split('').reverse().join('')

console.log(reverseNumber(123), 321)
console.log(reverseNumber(-123), -321)
console.log(reverseNumber(100), 1)
