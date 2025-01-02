// Description:
// --------------------------------------
// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.


// Solution:
// --------------------------------------
function rev(str){
    if (str.split("").every(e => e === " ")) {
        return ""
    }
    return str.split(" ").map((el, idx) => idx % 2 === 0 ? el.trim() : el.trim().split("").reverse().join("")).join(" ")
}

console.log(rev("Reverse this string, please!"), "Reverse siht string, !esaelp")
console.log(rev("I really don't like reversing strings!"),"I yllaer don't ekil reversing !sgnirts")
console.log(rev("   "), "")


// Alt Solution:
// --------------------------------------
function rev(str){
    return str.split(" ").map((el, idx) => idx % 2 === 0 ? el : el.split("").reverse().join("")).join(" ").trim()
}

console.log(rev("Reverse this string, please!"), "Reverse siht string, !esaelp")
console.log(rev("I really don't like reversing strings!"),"I yllaer don't ekil reversing !sgnirts")
console.log(rev("   "), "")