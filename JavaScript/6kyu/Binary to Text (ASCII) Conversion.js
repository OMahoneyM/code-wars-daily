// Description:
// --------------------------------------
// Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

// Each 8 bits on the binary string represent 1 character on the ASCII table.

// The input string will always be a valid binary string.

// Characters can be in the range from "00000000" to "11111111" (inclusive)

// Note: In the case of an empty binary string your function should return an empty string.


// Solution:
// --------------------------------------
function binaryToString(binary) {
    let arr = []
    for (let i = 0; i < binary.length; i += 8){
        let letter = String.fromCharCode(parseInt(binary.slice(i, i + 8), 2))
        arr.push(letter)
    }
    return arr.join('')
}

console.log(binaryToString("01100001"), "a")
console.log(binaryToString('01001011010101000100100001011000010000100101100101000101'), 'KTHXBYE')
console.log(binaryToString('001111000011101000101001'), '<:)')


// Alt Solution:
// --------------------------------------
function binaryToString(str){
    return str.replace(/[01]{8}/g, w => String.fromCharCode(parseInt(w, 2)))
}

console.log(binaryToString("01100001"), "a")
console.log(binaryToString('01001011010101000100100001011000010000100101100101000101'), 'KTHXBYE')
console.log(binaryToString('001111000011101000101001'), '<:)')
