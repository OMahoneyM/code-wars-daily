// Description:
// --------------------------------------
// Task

// Given a string str, reverse it and omit all non-alphabetic characters.
// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output

//     [input] string str

// A string consists of lowercase latin letters, digits and symbols.

//     [output] a string


// Solution:
// --------------------------------------
function reverseLetter(str){
    return str.split('').map(e => {
        if (/[a-z]/.test(e))
            return e
        }).reverse().join('');
}

console.log(reverseLetter('ultr53o?n')) //nortlu


// Alt Solution:
// --------------------------------------
const reverseLetter = s => s.replace(/[^a-z]/gi,'').split('').reverse().join('');