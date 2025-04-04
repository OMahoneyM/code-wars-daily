// Description:
// --------------------------------------
// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

// Example (s, sep --> Output)

// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"


// Solution:
// --------------------------------------
function freqSeq(str, sep) {
    let hashMap = {}
    let result = []

    for (let char of str) {
        hashMap[char] ? hashMap[char]++ : hashMap[char] = 1
    }

    for(let char of str) {
        result.push(hashMap[char])
    }

    return result.join(sep)
}

console.log(freqSeq("hello world", "-"), "1-1-3-3-2-1-1-2-1-3-1")
console.log(freqSeq("19999999", ":"), "1:7:7:7:7:7:7:7")
console.log(freqSeq("^^^**$", "x"), "3x3x3x2x2x1")


// Alt Solution:
// --------------------------------------
function freqSeq(str, sep){
    return str.split('').map((e, i, arr) => arr.filter(el => el === e).length).join(sep)
}
console.log(freqSeq("hello world", "-"), "1-1-3-3-2-1-1-2-1-3-1")
console.log(freqSeq("19999999", ":"), "1:7:7:7:7:7:7:7")
console.log(freqSeq("^^^**$", "x"), "3x3x3x2x2x1")
