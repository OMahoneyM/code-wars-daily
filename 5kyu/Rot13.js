// Description:
// --------------------------------------
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


// Solution:
// --------------------------------------
function rot13(message){
    //split message into an array of letters
    let arr = message.split('');
    //loop through each letter
    return arr.map(el => {
        //set variable for ASCII code and add 13
        let asciiCode = el.charCodeAt() + 13;
        //test if letter is between a-z
        if (/[a-z]/.test(el)) {
            //if variable > 122
            if (asciiCode > 122) {
                //return variable - 26 converted to String.fromCharCode()
                return String.fromCharCode(asciiCode - 26);
            } else {
                // return variable converted to String.fromCharCode()
                return String.fromCharCode(asciiCode);
            }
        //test if letter is between A-Z
        } else if (/[A-Z]/.test(el)) {
            //if variable > 90
            if (asciiCode > 90) {
                //return variable - 26 converted to String.fromCharCode()
                return String.fromCharCode(asciiCode - 26);
            } else {
                // return variable converted to String.fromCharCode()
                return String.fromCharCode(asciiCode);
            }
        } else {
            //return letter
            return el;
        }
    }).join('')
}

console.log(rot13('test')) //grfg
console.log(rot13('Test')) //Trfg


// Alt Solution:
// --------------------------------------
function rot13(message){
    return message
                .split('')
                .map(el => {
                    let asciiCode = el.charCodeAt() + 13;
                    if (/[a-z]/.test(el)) {
                        return (asciiCode > 122) ? String.fromCharCode(asciiCode - 26) : String.fromCharCode(asciiCode);
                    }

                    if (/[A-Z]/.test(el)) {
                        return (asciiCode > 90) ? String.fromCharCode(asciiCode - 26) : String.fromCharCode(asciiCode);
                    }

                    return el;
                    })
                .join('')
}

console.log(rot13('test')) //grfg
console.log(rot13('Test')) //Trfg


// Clever Solution:
// --------------------------------------
function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}