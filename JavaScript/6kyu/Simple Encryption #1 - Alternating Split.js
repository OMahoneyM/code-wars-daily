// Description:
// --------------------------------------
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.


// Solution:
// --------------------------------------
function encrypt(text, n) {
    if (!text || n < 1)
        return text;

    let odds = text.split('').filter((e, i) => i % 2 === 1);
    let evens = text.split('').filter((e, i) => i % 2 === 0);

    return encrypt(odds.concat(evens).join(''), n - 1);

}

function decrypt(encryptedText, n) {
    if (!encryptedText || n < 1)
        return encryptedText;

    let odd = encryptedText.slice(0, encryptedText.length / 2)
    let even = encryptedText.slice(encryptedText.length / 2)
    let decryptText = []

    for (i = 0; i < encryptedText.length; i++){
        if(i % 2 === i - 1){
            decryptText.push(odd[i])
            decryptText.push(even[i])
        } else {
            decryptText.push(even[i])
            decryptText.push(odd[i])
        }
    }
    return decrypt(decryptText.join(''), n - 1)
}

console.log(encrypt("This is a test!", 0)) //"This is a test!"
console.log(encrypt("This is a test!", 1)) //"hsi  etTi sats!"
console.log(encrypt("This is a test!", 3)) //" Tah itse sits!"

console.log(decrypt("hsi  etTi sats!", 1)) //"This is a test!"
