// Description:
// --------------------------------------
// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"

// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"

// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

//     Vowels are "aeiou", so discount the letter "y".
//     Input will always be a string.
//     Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
//     The input can be modified


// Solution:
// --------------------------------------
function nicknameGenerator(str) {
    let vowels = 'aeiou';
    if (str.length < 4) return "Error: Name too short";
    for (let letter of vowels) {
        if (str[2] === letter) {
            return str.slice(0, 4)
        }
    }
    return str.slice(0, 3);

}

console.log(nicknameGenerator("Robert"), "Rob")
console.log(nicknameGenerator("Douglas"), "Doug")
console.log(nicknameGenerator("Mia"), "Error: Name too short")


// Alt Solution:
// --------------------------------------
function nicknameGenerator(str) {
    if (str.length > 3) {
        return str.slice(0, 3 + 'aeiou'.includes(str[2]))
    } else {
        return "Error: Name too short"
    }
}

console.log(nicknameGenerator("Robert"), "Rob")
console.log(nicknameGenerator("Douglas"), "Doug")
console.log(nicknameGenerator("Mia"), "Error: Name too short")