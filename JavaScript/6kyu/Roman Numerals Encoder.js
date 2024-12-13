// Description:
// --------------------------------------
// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

// In Roman numerals:

//     1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
//     2008 is written as 2000=MM, 8=VIII; or MMVIII.
//     1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

//    1 -->       "I"
// 1000 -->       "M"
// 1666 --> "MDCLXVI"

// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000


// Solution:
// --------------------------------------
function convertOnesToRoman(num) {
    num = +num;
    let years = '';

    if (num === 9) years = 'IX'
    if (num < 9 && num >= 5) years = 'V' + 'I'.repeat((num - 5) / 1)
    if (num === 4) years = 'IV'
    if (num < 4) years = 'I'.repeat(num)

    return years;
    
}

function convertTensToRoman(num) {
    num = +num;
    let decades = '';

    if (num >=90) decades = 'XC'
    if (num < 90 && num >= 50) decades = 'L' + 'X'.repeat((num - 50) / 10)
    if (num === 40) decades = 'XL'
    if (num < 40) decades = 'X'.repeat(num / 10)

    return decades;
}

function convertHundredsToRoman(num) {
    num = +num;
    let century = '';

    if (num === 900) century = 'CM'
    if (num < 900 && num > 400) century = 'D' + 'C'.repeat((num - 500) / 100)
    if (num === 400) century = 'CD'
    if (num < 400) century = 'C'.repeat(num / 100)

    return century;
}

function convertThousandsToRoman(num) {
    num = +num;

    let millennia = 'M'.repeat(num / 1000);

    return millennia;
}

function romanNumEncode(arr) {

    let result = []
    arr = arr.reverse()

    for (let i = arr.length; i > 0; i--) {
        if (i === 4) result.push(convertThousandsToRoman(arr[i - 1]))
        if (i === 3) result.push(convertHundredsToRoman(arr[i - 1]))
        if (i === 2) result.push(convertTensToRoman(arr[i - 1]))
        if (i === 1) result.push(convertOnesToRoman(arr[i - 1]))
    }

    return result.join('');
}

function solution(num) {
    //split the number into an array of strings
    let numArr = num.toString().split('')
        //store as tens, hundreds, thousands
    for (let i = 0; i < numArr.length; i++){
        numArr[i] = numArr[i].padEnd(numArr.length - i, '0')
    }
    
    //use function to change each element into Roman Num and return
    return romanNumEncode(numArr)
}

console.log(solution(1), "I")
console.log(solution(1990), "MCMXC")
console.log(solution(1991), "MCMXCI")
console.log(solution(531), "DXXXI")
console.log(solution(4), "IV")
console.log(solution(5), "V")
console.log(solution(6), "VI")
console.log(solution(7), "VII")
console.log(solution(8), "VIII")
console.log(solution(9), "IX")
console.log(solution(10), "X")
console.log(solution(11), "XI")


// Clever Solution:
// --------------------------------------
function solution(num){
    const romanNums = { 
        M:1000,
        CM:900, 
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1 
    };

    let result = '';

    while (num > 0) {
        for (x in romanNums) {
            if (romanNums[x] <= num) {
                result += x
                num -= romanNums[x];
                break;
            }
        }
    }

    return result;
}

console.log(solution(1), "I")
console.log(solution(1990), "MCMXC")
console.log(solution(1991), "MCMXCI")
console.log(solution(531), "DXXXI")
console.log(solution(4), "IV")
console.log(solution(5), "V")
console.log(solution(6), "VI")
console.log(solution(7), "VII")
console.log(solution(8), "VIII")
console.log(solution(9), "IX")
console.log(solution(10), "X")
console.log(solution(11), "XI")
