// Description:
// --------------------------------------
// Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.

// You may find the following Math methods useful:

//     Math.round(x) (of course)
//     Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)


// Solution:
// --------------------------------------
Math.roundTo = function (number, precision) {
    let factor = 10 ** precision
    return Math.round(number * factor) / factor
}

console.log(Math.roundTo(10.324, 2), 10.32)
console.log(Math.roundTo(101.3245, 3), 101.325)



// Alt Solution:
// --------------------------------------
Math.roundTo = function (number, precision) {
    return +number.toFixed(precision)
}

console.log(Math.roundTo(10.324, 2), 10.32)
console.log(Math.roundTo(101.3245, 3), 101.325)