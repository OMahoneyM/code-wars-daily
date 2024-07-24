// Description:
// --------------------------------------
// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
// Note

//     If num is negative, ignore its sign and treat it as a positive value
//     If nth is not positive, return -1
//     Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

// Examples(num, nth --> output)

// 5673, 4 --> 5
// 129, 2 --> 2
// -2825, 3 --> 8
// -456, 4 --> 0
// 0, 20 --> 0
// 65, 0 --> -1
// 24, -8 --> -1


// Solution:
// --------------------------------------
function findDigit(num, nth){
    //test if nth < 0
    if (nth < 1) {
        return -1;
    }
    //take absolute value of num convert to string and reverse it
    num = Math.abs(num).toString().split('').reverse();
    //test if num length < nth
    if (num.length < nth)
        return 0;
    //return num at nth position as a number
    return +num[nth - 1]
}

console.log(findDigit(5673, 4)) //5
console.log(findDigit(-456, 4)) //0
console.log(findDigit(200, -1)) //-1
console.log(findDigit(200, 0)) //-1