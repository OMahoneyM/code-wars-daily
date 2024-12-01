// Description:
// --------------------------------------
// Definition

// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
// Task

// Given a number, Find if it is Disarium or not .
// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes

//     Number passed is always Positive .
//     Return the result as String

// Input >> Output Examples

// disariumNumber(89) ==> return "Disarium !!"

// Explanation:

//     Since , 81 + 92 = 89 , thus output is "Disarium !!"


// Solution:
// --------------------------------------
function disariumNumber(n) {
    let disarium = n.toString().split('').reduce((acc, cur, idx) => acc + cur**(idx + 1), 0)

    return (disarium === n) ? "Disarium !!" : "Not !!"
}

console.log(disariumNumber(89), "Disarium !!")
console.log(disariumNumber(1024), "Not !!")