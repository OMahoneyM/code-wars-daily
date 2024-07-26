// Description:
// --------------------------------------
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

// More examples in test cases. Good luck!


// Solution:
// --------------------------------------
function solve(s) {
    //declare a counter variable
    let counter = 0
    //loop through word
    for (let letter of s){
        //test if letter is lowercase and add 1 to counter if true
        if (/[a-z]/.test(letter)){
            counter++;
        }
    }
    //test if counter is < half the length of s
    if (counter < s.length / 2){
        //return s upper case
        return s.toUpperCase()
    }
    // return s lower case
    return s.toLowerCase()
}

console.log(solve("code")) //"code"
console.log(solve("CODe")) //"CODe"
console.log(solve("COde")) //"code"
console.log(solve("Code")) //"code"