// Description:
// --------------------------------------
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^

// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6


// Solution:
// --------------------------------------
function calc(x) {
    let diff = 0
    const total1 = x.split("").map(e => e.charCodeAt()).join("")

    for (let char of total1) {
        if (char === "7") {
            diff += 6
        }
    }
    
    return diff
}

console.log(calc('abcdef'), 6)
console.log(calc('aaaaaddddr'), 30)