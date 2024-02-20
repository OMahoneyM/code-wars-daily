// Description:
// --------------------------------------
// Complete the function which converts hex number (given as a string) to a decimal number.


// Solution:
// --------------------------------------
function expressionMatter(a, b, c) {
    let arr = [];

    arr.push(a + b + c)
    arr.push(a + b * c)
    arr.push(a * b + c)
    arr.push(a * b * c)
    arr.push((a + b) * c)
    arr.push(a * (b + c))
    
    return Math.max(...arr);
}

console.log(expressionMatter(1,1,9)) // 18