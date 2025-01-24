// Description:
// --------------------------------------
// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.


// Solution:
// --------------------------------------
function moveTen(s){
    let newAlphabet = "_klmnopqrstuvwxyzabcdefghij"
    return s.split("").map((e) => newAlphabet[e.charCodeAt() - 96]).join("")
}
console.log(moveTen("testcase"), "docdmkco")
