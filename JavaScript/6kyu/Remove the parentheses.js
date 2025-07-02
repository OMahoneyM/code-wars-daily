// Description:
// --------------------------------------
// Remove the parentheses

// In this kata you are given a string for example:

// "example(unwanted thing)example"

// Your task is to remove everything inside the parentheses as well as the parentheses themselves.

// The example above would return:

// "exampleexample"

// Notes

//     Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
//     There can be multiple parentheses.
//     The parentheses can be nested.


// Solution:
// --------------------------------------
function removeParentheses(s){
    let count = 0;
    let  result = "";
    for (let i of s) {
        if (i === "(") count++
        if (count === 0) result += i
        if (i === ")") count--
      }
    return result
}

console.log(removeParentheses("example(unwanted thing)example"), "exampleexample")
console.log(removeParentheses("a(b(c))"), "a")
console.log(removeParentheses("(first group) (second group) (third group)"), "  ")