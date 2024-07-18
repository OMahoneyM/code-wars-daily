// Description:
// --------------------------------------
// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.


// Solution:
// --------------------------------------
function wordsToMarks(str){
    //split str into array
    //map each element to its charCodeAt(0) value
    //reduce array and return
    return str.split('').map(e => e.charCodeAt(0) - 96).reduce((a, c) => a + c, 0);
}

console.log(wordsToMarks('love')) // 54


// Simpler Solution:
// --------------------------------------
const wordsToMarks = s => [...s].reduce((a, c) => a += c.charCodeAt() - 96, 0);