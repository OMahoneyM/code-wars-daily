// Description:
// --------------------------------------
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.
// Examples:

// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.

// Note that 121 has twice the digit 1.


// Solution:
// --------------------------------------
function nbDig(n, d) {
    let array = [];
    let count = 0;
    for(let i = 0; i <= n; i++){
        array.push(i ** 2);
    }
    array.filter((e) => String(e).includes(String(d))).forEach((e, i, arr) => {
        for (let number of String(e)){
            if (number === String(d))
                count++
        }
    })
    return count
}

console.log(nbDig(10, 1)) //4
console.log(nbDig(5750, 0)) //4700


// Alt Solution:
// --------------------------------------
function nbDig(n, d) {
    let res = 0;
    for (let g = 0; g <= n; g++){
        let square = (g * g + "").split("");
        square.forEach((s) => s == d ? res++ : null)
    }
    return res;
}

console.log(nbDig(10, 1)) //4
console.log(nbDig(5750, 0)) //4700
