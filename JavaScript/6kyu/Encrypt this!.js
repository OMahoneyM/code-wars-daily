// Description:
// --------------------------------------
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

//     Your message is a string containing space separated words.
//     You need to encrypt each word in the message using the following rules:
//         The first letter must be converted to its ASCII code.
//         The second letter must be switched with the last letter
//     Keepin' it simple: There are no special characters in the input.

// Examples:

// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"


// Solution:
// --------------------------------------
function encryptThis(text) {
    //split text into an array by spaces
    return text.split(' ').map((e, idx) => {
        //declare result varibale =''
        let encryptedWord = '';
        //for loop on each element
        for (let i = 0; i < e.length; i++){
            //if element is first encryptedWord += element's ASCII code
            if (i === 0){
                encryptedWord += e[i].charCodeAt();
            } else if (i === 1){
            //if element is second add last element
                encryptedWord += e[e.length - 1]
            } else if (i === e.length - 1) {
            //if element is last add second element
                encryptedWord += e[1]
            } else {
            //else add element
                encryptedWord += e[i]
            }
        }
        return encryptedWord;
    //join using spaces
    }).join(' ');
}

console.log(encryptThis('A')) //'65'
console.log(encryptThis("A wise old owl lived in an oak")) //"65 119esi 111dl 111lw 108dvei 105n 97n 111ka"


// RegEx Solution:
// --------------------------------------
const encryptThis = text => text
    .split(' ')
    .map(word => word
        .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
        .replace(/^(\w)/, word.charCodeAt()))
    .join(' ');

console.log(encryptThis('A')) //'65'
console.log(encryptThis("A wise old owl lived in an oak")) //"65 119esi 111dl 111lw 108dvei 105n 97n 111ka"