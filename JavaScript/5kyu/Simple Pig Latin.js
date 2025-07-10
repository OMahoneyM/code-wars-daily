// Description:
// --------------------------------------
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


// Solution:
// --------------------------------------
function pigIt(str){
    return str.split(' ').map(e => {
        if (/[a-z]/i.test(e)){
            return e.slice(1) + e[0] + "ay"
        } else {
            return e
        }
    }).join(' ')
}

console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
console.log(pigIt('Hello world !'), 'elloHay orldway !')


// Alt Solution:
// --------------------------------------
function pigIt(str){
    return str.replace(/\w+/g , e => e.slice(1) + e[0] + "ay")
}

console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
console.log(pigIt('Hello world !'), 'elloHay orldway !')