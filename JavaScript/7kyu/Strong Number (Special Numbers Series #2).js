// Description:
// --------------------------------------
// Strong number is a number with the sum of the factorial of its digits is equal to the number itself.

// For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.
// Task

// Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".
// Examples

//     1 is a strong number, because 1! = 1, so return "STRONG!!!!".
//     123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
//     145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
//     150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".


// Solution:
// --------------------------------------
function strong(n){
    let arr  = String(n).split('').map(e => {
        let eFac = 1
        for (let i = e; i > 0; i--){
            eFac *= i
        }
        return eFac
    }).reduce((acc, cur) => acc + +cur, 0)

    return arr === n ? "STRONG!!!!" : "Not Strong !!"
}

console.log(strong(1), "STRONG!!!!")
console.log(strong(123), "Not Strong !!")