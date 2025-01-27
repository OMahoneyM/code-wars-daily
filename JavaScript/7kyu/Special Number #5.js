// Description:
// --------------------------------------
// Definition

// A number is a Special Number if its digits only consists of 0, 1, 2, 3, 4 or 5

// Given a number, determine if it is a special number or not.
// Notes

//     The number passed will be positive (N > 0)

//     All single-digit numbers within the interval [1:5] are considered special numbers


// Solution:
// --------------------------------------
function specialNumber(n) {
    return /[6-9]/.test(n.toString()) ? "NOT!!" : "Special!!"
}

console.log(specialNumber(3), "Special!!")
console.log(specialNumber(3514), "Special!!")
console.log(specialNumber(6), "NOT!!")
console.log(specialNumber(36), "NOT!!")
console.log(specialNumber(373), "NOT!!")