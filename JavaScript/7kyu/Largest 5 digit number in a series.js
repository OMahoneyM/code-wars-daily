// Description:
// --------------------------------------
// In the following 6 digit number:

// 283910

// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890

// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.


// Solution:
// --------------------------------------
function solution(digits) {
    //define result variable and set to 0
    let result = 0;
    //for loop over length of digits
    for (let i = 0; i < digits.length - 4; i++){
        //define slice variable and set it to first 5 digit slice
        let fiveDigits = digits.slice(i, i + 5);
        //if slice variable > result
        if (+fiveDigits > result) {
            // result = slice
            result = +fiveDigits;
        }
    }
    //return result
    return result;
}

console.log(solution('1234567890')) //67890
console.log(solution('1234567898765')) //98765
console.log(solution('99890')) //99890