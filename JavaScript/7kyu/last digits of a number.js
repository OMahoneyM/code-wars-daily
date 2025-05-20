// Description:
// --------------------------------------
// Your job is to implement a function which returns the last D digits of an integer N as a list.
// Special cases:

//     If D > (the number of digits of N), return all the digits.
//     If D <= 0, return an empty list.

// Examples:

// N = 1
// D = 1
// result = [1]

// N = 1234
// D = 2
// result = [3, 4]

// N = 637547
// D = 6
// result = [6, 3, 7, 5, 4, 7]
  
            
// Solution:
// --------------------------------------
function lastDigit(n, d) {
    n = n.toString().split('').map(e => +e)

    if (d > n.length) { return n }
    if (d < 1) { return [] }

    return n.slice(n.length - d , n.length)
}

console.log(lastDigit(1234, 2), [3,4])
console.log(lastDigit(1234, 5), [1,2,3,4])
console.log(lastDigit(1234, -5), [])
  
            
// Alt Solution:
// --------------------------------------
function lastDigit(n, d) {
    return String(n).split("").slice(-d).map(e => +e)
}

console.log(lastDigit(1234, 2), [3,4])
console.log(lastDigit(1234, 5), [1,2,3,4])
console.log(lastDigit(1234, -5), [])