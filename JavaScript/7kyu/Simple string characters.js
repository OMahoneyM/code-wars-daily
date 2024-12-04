// Description:
// --------------------------------------
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

// The order is: uppercase letters, lowercase letters, numbers and special characters.

// "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]

// More examples in the test cases.

// Good luck!


// Solution:
// --------------------------------------
function solve(s) {
    let result = [0,0,0,0]

    for (let char of s) {
        if (/[A-Z]/.test(char)) {
            result[0]++
        } else if (/[a-z]/.test(char)) {
            result[1]++
        } else if (/[0-9]/.test(char)) {
            result[2]++
        } else {
            result[3]++
        }
    }

    return result
}

console.log(solve("*'&ABCDabcde12345"), [4,5,5,3])
console.log(solve(""), [0,0,0,0])