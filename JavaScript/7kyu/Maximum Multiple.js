// Description:
// --------------------------------------
// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
//     N is divisible by divisor

//     N is less than or equal to bound

//     N is greater than 0.

// Notes
//     The parameters (divisor, bound) passed to the function are only positive values .
//     It's guaranteed that a divisor is Found .


// Solution:
// --------------------------------------
function maxMultiple(divisor, bound){
    while (bound % divisor != 0){
        bound--
    }
    return bound;
}

console.log(maxMultiple(2,7)) //6
console.log(maxMultiple(10,50)) //50

// Alt Solution:
// --------------------------------------
const maxMultiple = (divisor, bound) => bound - bound % divisor;