// Description:
// --------------------------------------
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.


// Solution:
// --------------------------------------
let vCode = {
    "a": 1, 
    "e": 2,
    "i": 3, 
    "o": 4,
    "u": 5
}

function encode(s) {
    return s.split("").map(e => (e in vCode) ? vCode[e] : e).join('');
}

function decode(s){
    return s.split("").map(e => {
        if (Object.values(vCode).indexOf(+e) > -1){
            return Object.keys(vCode).find(key => vCode[key] === +e)
       } else {
        return e
       }
    }).join("")
}

console.log(encode("hello world!"), "h2ll4 w4rld!")
console.log(decode("h2ll4 w4rld!"), "hello world!")


// Alt Solution:
// --------------------------------------
function encode(s) {
    return s.replace(/[aeiou]/g, x => '_aeiou'.indexOf(x))
}

function decode(s) {
    return s.replace(/[1-5]/g, x => '_aeiou'.charAt(x))
}

console.log(encode("hello world!"), "h2ll4 w4rld!")
console.log(decode("h2ll4 w4rld!"), "hello world!")
