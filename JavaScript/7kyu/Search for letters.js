// Description:
// --------------------------------------
// Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

// The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

// So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.

// For instance:

// "a   **&  cZ"  =>  "10100000000000000000000001"

// "aaaaaaa79345675"  =>  "10000000000000000000000000"

// "&%#*"  =>  "00000000000000000000000000"
  
            
// Solution:
// --------------------------------------
function change(str){
    let result = ""
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    str = str.toLowerCase()

    for (let i = 0; i < alphabet.length; i++){
        if (str.search(alphabet[i]) > -1) {
            result += "1"
        } else {
            result += "0"
        }
    }

    return result;
}

console.log(change("a   **&  cZ"), "10100000000000000000000001")
console.log(change("%$&*"), "00000000000000000000000000")
console.log(change("aaa12345"), "10000000000000000000000000")

            
// Alt Solution:
// --------------------------------------
function change(str){
    str = str.toLowerCase()

    return "abcdefghijklmnopqrstuvwxyz".split("").map(e => str.indexOf(e) === -1 ? 0 : 1).join("")
}

console.log(change("a   **&  cZ"), "10100000000000000000000001")
console.log(change("%$&*"), "00000000000000000000000000")
console.log(change("aaa12345"), "10000000000000000000000000")
