// Description:
// --------------------------------------
// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial


// Solution:
// --------------------------------------
function factorial(n){
    //set product variable to 1
    let product = 1;
    //run desc for loop
    for(let i = n; i > 0; i--){
        //multiply i by product
        product *= i
    }
    //return product
    return product;
}

console.log(factorial(0)) //1
console.log(factorial(1)) //1
console.log(factorial(4)) //24



// Recursive Solution:
// --------------------------------------
const factorial = n => n ? factorial(n - 1) * n : 1;