// Description:
// --------------------------------------
// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1


// Solution:
// --------------------------------------
function countLettersAndDigits(input) {
    return input.split("").map(e => /[a-z0-9]/i.test(e) ? 1 : 0).reduce((a, c) => a + c, 0)
}

console.log(countLettersAndDigits("hel2!lo"), 6)
console.log(countLettersAndDigits("!?..b"), 1)
console.log(countLettersAndDigits("n!!_ice!!123"), 7)


// Alt Solution:
// --------------------------------------
function countLettersAndDigits(input){
    return input.replace(/[^a-z\d]/gi,"").length
}

console.log(countLettersAndDigits("hel2!lo"), 6)
console.log(countLettersAndDigits("!?..b"), 1)
console.log(countLettersAndDigits("n!!_ice!!123"), 7)
