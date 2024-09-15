// Description:
// --------------------------------------
// Your Job

// Find the sum of all multiples of n below m
// Keep in Mind

//     n and m are natural numbers (positive integers)
//     m is excluded from the multiples

// Examples

// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"


// Solution:
// --------------------------------------
function sumMul(n, m){
    //check for bad input (0 or m < n)
    if (m < n || n === 0) return "INVALID";
    //set total variable to 0
    let total = 0;
    //for loop with i = n until i = m
    for (let i = n; i < m; i += n){
        //add i to total
        total += i
    }
    //return total
    return total;
}

console.log(sumMul(0, 0)) //INVALID
console.log(sumMul(4, -7)) //INVALID
console.log(sumMul(2, 9)) //20