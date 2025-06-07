// Description:
// --------------------------------------
// Task

// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...

// All elements of the sum are the results of integer division.
// Example

// 25  =>  25 + 12 + 6 + 3 + 1 = 47


// Solution:
// --------------------------------------
function halvingSum(n) {
    let result = n

    for (let i = 2; n > 0; i * 2){
        n = Math.floor(n / i)
        result += n
    }

    return result
}

console.log(halvingSum(25), 47)
console.log(halvingSum(127), 247)