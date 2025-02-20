// Description:
// --------------------------------------
// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)


// Solution:
// --------------------------------------
function isDivisible(n, ...divisors){
    return divisors.every(e => n % e === 0);
}

console.log(isDivisible(6, 1, 3), true)
console.log(isDivisible(100, 5, 10, 20), true)
console.log(isDivisible(6, 5), false)
console.log(isDivisible(6), true)
