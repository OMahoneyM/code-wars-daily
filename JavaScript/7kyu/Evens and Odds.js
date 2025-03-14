// Description:
// --------------------------------------
// This kata is about converting numbers to their binary or hexadecimal representation:

//     If a number is even, convert it to binary.
//     If a number is odd, convert it to hex.

// Numbers will be positive. The hexadecimal string should be lowercased.


// Solution:
// --------------------------------------
function evensAndOdds(num){
	return (num % 2 === 0) ? num.toString(2) : num.toString(16)
}
console.log(evensAndOdds(2), '10')
console.log(evensAndOdds(13), 'd')
console.log(evensAndOdds(0), '0')


// Alt Solution:
// --------------------------------------
function evensAndOdds(num) {
    return num.toString(num % 2 ? 16 : 2)
}
console.log(evensAndOdds(2), '10')
console.log(evensAndOdds(13), 'd')
console.log(evensAndOdds(0), '0')
