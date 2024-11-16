// Description:
// --------------------------------------
// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"


// Solution:
// --------------------------------------
function solution(val) {
    let result = String(val);
    while (result.length < 5) {
        result = "0" + result;
    }
    return `Value is ${result}`
}

console.log(solution(5), "Value is 00005")
console.log(solution(500), "Value is 00500")
console.log(solution(50000), "Value is 50000")



// Alt Solution:
// --------------------------------------
function solution(val) {
    return "Value is " + val.toString().padStart(5, "0");
}

console.log(solution(5), "Value is 00005")
console.log(solution(500), "Value is 00500")
console.log(solution(50000), "Value is 50000")