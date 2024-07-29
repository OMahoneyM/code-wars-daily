// Description:
// --------------------------------------
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


// Solution:
// --------------------------------------
function cubeOdd(arr) {
    if (arr.some(el => typeof el === 'string')) return undefined
    
    return arr.map(el => el ** 3).filter(el => el % 2 != 0).reduce((a, c) => a + c, 0)
}

console.log(cubeOdd([1, 2, 3, 4])) // 28
console.log(cubeOdd([-3,-2,2,3])) // 0
console.log(cubeOdd(["a",12,9,"z",42])) // undefined


// Alt Solution:
// --------------------------------------
const cubeOdd = a => {
    let isNumeric = a.every(x => !isNaN(x))
    return isNumeric ? a.filter(n => n % 2).reduce((a, c) => a + (c * c * c), 0) : undefined
}

console.log(cubeOdd([1, 2, 3, 4])) // 28
console.log(cubeOdd([-3,-2,2,3])) // 0
console.log(cubeOdd(["a",12,9,"z",42])) // undefined
