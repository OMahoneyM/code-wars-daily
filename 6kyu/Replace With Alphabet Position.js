// Description:
// --------------------------------------
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"


// Solution:
// --------------------------------------
function alphabetPosition(text){
    return text.toLowerCase().split(' ').map(item => {
        let code = ''
        for(let letter of item){
            if ((letter.charCodeAt(0) - 96) > 0 && (letter.charCodeAt(0) - 96) <= 26){
                code += (letter.charCodeAt(0) - 96 + ' ')
            }
       }
       return code
    }).join('').trim()
}


console.log(alphabetPosition("The sunset sets at twelve o' clock.")) //, "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
