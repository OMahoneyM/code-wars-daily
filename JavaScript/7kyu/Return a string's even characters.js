// Description:
// --------------------------------------
// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"
  
  
// Solution:
// --------------------------------------
function evenChars(str){
    if (str.length < 2 || str.length > 100) {
        return "invalid string"
    } else {
        return str.split("").filter((e, i) => i % 2 != 0)
    }
}

console.log(evenChars("abcdefg"), ["b", "d", "f"])
console.log(evenChars("b"), "invalid string")

  
// Alt Solution:
// --------------------------------------
function evenChars(str){
    return (str.length < 2 || str.length > 100) ? "invalid string" : [...str].filter((e, i) => i % 2)
}
console.log(evenChars("abcdefg"), ["b", "d", "f"])
console.log(evenChars("b"), "invalid string")
