// Description:
// --------------------------------------
// For this kata you will have to forget how to add two numbers.

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// Examples
// 16 + 18 = 214
// 26 + 39 = 515
// 122 + 81 = 1103
// 72 + 9 = 711


// Solution:
// --------------------------------------
function add(n1, n2){
    let n1Str = String(n1).split("").reverse().join("")
    let n2Str = String(n2).split("").reverse().join("")
    let longest = String(Math.max(n1Str.length, n2Str.length))
    let result = []

    for (let i = 0; i < longest; i++){
        if (!n1Str[i]) {
            result.unshift(n2Str[i])
        } else if (!n2Str[i]) {
            result.unshift(n1Str[i])
        } else {
            result.unshift(Number(n1Str[i]) + Number(n2Str[i]))
        }
    }

    return Number(result.join(""))
}

console.log(add(16, 18), 214)
console.log(add(122, 81), 1103)
console.log(add(0, 1), 1)
console.log(add(0, 0), 0)
console.log(add(38810, 1383), 391193)


// Alt Solution:
// --------------------------------------
function add(n1, n2){
    let n1Str = String(n1).split("").reverse().join("")
    let n2Str = String(n2).split("").reverse().join("")
    let longest = String(Math.max(n1Str.length, n2Str.length))
    let result = []

    for (let i = 0; i < longest; i++){
        result.unshift(parseInt(n1Str[i] || 0) + parseInt(n2Str[i] || 0))
    }

    return Number(result.join(""))
}

console.log(add(16, 18), 214)
console.log(add(122, 81), 1103)
console.log(add(0, 1), 1)
console.log(add(0, 0), 0)
console.log(add(38810, 1383), 391193)
