// Description:
// --------------------------------------
// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

//     instead of including i or I put the number 1 in the password;
//     instead of including o or O put the number 0 in the password;
//     instead of including s or S put the number 5 in the password.

// Examples:

// "Give me liberty or give me death"  --> "Gml0gmd"
// "Keep Calm and Carry On"            --> "KCaC0"


// Solution:
// --------------------------------------
function makePassword(phrase) {
    return phrase.split(' ').map(e => e[0].toLowerCase() === "i" ? "1" : e[0].toLowerCase() === "o" ? "0" : e[0].toLowerCase() === "s" ? "5" : e[0]).join("")
}

console.log(makePassword("Give me liberty or give me death"), "Gml0gmd")
console.log(makePassword("Keep Calm and Carry On"), "KCaC0")


// Alt Solution:
// --------------------------------------
function makePassword(phrase) {
    return phrase
        .split(' ')
        .map(e => e[0])
        .join("")
        .replace(/i/ig, '1')
        .replace(/o/ig, '0')
        .replace(/s/ig, '5')
}

console.log(makePassword("Give me liberty or give me death"), "Gml0gmd")
console.log(makePassword("Keep Calm and Carry On"), "KCaC0")