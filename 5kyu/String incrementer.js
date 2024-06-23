// Description:
// --------------------------------------
// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


// Solution:
// --------------------------------------
function incrementString (str) {
    return str.replace(/\d*$/, match => {
        if (!match) {
            return '1'
        }
        const numStr = String(parseInt(match) + 1)
        const numLengthDiff = match.length - numStr.length
        return (numLengthDiff > 0) ? '0'.repeat(numLengthDiff) + numStr : numStr
    })
};

console.log(incrementString('foobar000')) //foobar001
console.log(incrementString('foobar999')) //foobar1000
console.log(incrementString('foobar00999')) //foobar01000
console.log(incrementString('foo')) //foo1

// Code Fights explains the solution in this video:
// https://www.youtube.com/watch?v=DAIZ-0y2F8I
