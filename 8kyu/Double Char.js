// Description:
// --------------------------------------
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


// Solution:
// --------------------------------------
function doubleChar(str){
    let newWord = ''
    for(let letter of str){
        newWord += letter + letter 
    }
    return newWord
}
console.log(doubleChar('Strings!'))


// Alt Solution:
// --------------------------------------
const doubleChar = str => str.split('').map(e => e + e).join('')

console.log(doubleChar('Strings!2'))
