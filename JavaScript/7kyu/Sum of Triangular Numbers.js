// Description:
// --------------------------------------
// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]

// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.


// Solution:
// --------------------------------------
function sumTriangularNumbers(n) {
    let sum = 0;
    let result = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
            result += sum;
        }
    return result;
}

console.log(sumTriangularNumbers(6)) //56
console.log(sumTriangularNumbers(-10)) //0


// Alt Solution:
// --------------------------------------
function sumTriangularNumbers(n) {
    let result = 0;
        for (let i = 1; i <= n; i++) {
            result += (i * (i + 1)) / 2;
        }
    return result;
}