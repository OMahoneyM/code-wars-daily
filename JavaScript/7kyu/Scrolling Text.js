// Description:
// --------------------------------------
// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
// Example

// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

// Good luck!


// Solution:
// --------------------------------------
function scrollingText(str){
    let result = []

    for (let i = 0; i < str.length; i++){
        result.push((str.slice(i) + str.slice(0, i)).toUpperCase())
    }

    return result
}

console.log(scrollingText("codewars"), [ "CODEWARS","ODEWARSC","DEWARSCO","EWARSCOD","WARSCODE","ARSCODEW","RSCODEWA","SCODEWAR" ])