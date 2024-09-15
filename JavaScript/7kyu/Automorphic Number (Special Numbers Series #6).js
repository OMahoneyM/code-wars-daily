// Description:
// --------------------------------------
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
// Task

// Given a number determine if it Automorphic or not.

// Notes

//     The number passed to the function is positive


// Solution:
// --------------------------------------
function automorphic(n){
    return (n ** 2).toString().endsWith(n) ? "Automorphic" : "Not!!";
}

console.log(automorphic(1)) //Automorphic
console.log(automorphic(3)) //Not!!
console.log(automorphic(6)) //Automorphic
