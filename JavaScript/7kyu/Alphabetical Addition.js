// Description:
// --------------------------------------
// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.
// Notes:

//     Letters will always be lowercase.
//     Letters can overflow (see second to last example of the description)
//     If no letters are given, the function should return 'z'

// Examples:

// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'


// Solution:
// --------------------------------------
function addLetters(...letters){
    let sum = letters.reduce((a, c) => a + (c.charCodeAt() - 96), 0);

    return (sum % 26) ? String.fromCharCode((sum % 26) + 96) : 'z';
}

console.log(addLetters('a', 'b', 'c'), 'f')
console.log(addLetters('z'), 'z')
console.log(addLetters('z', 'a'), 'a')
console.log(addLetters('y', 'c', 'b'), 'd')
console.log(addLetters(), 'z')
console.log(addLetters("p", "r", "f", "l"), 'z')



// Alt Solution:
// --------------------------------------
function addLetters(...letters){
    const alpha = 'zabcdefghijklmnopqrstuvwxy';
    const sum = letters.reduce((a, c) => a + alpha.indexOf(c), 0) % 26;

    return alpha[sum];
}

console.log(addLetters('a', 'b', 'c'), 'f')
console.log(addLetters('z'), 'z')
console.log(addLetters('z', 'a'), 'a')
console.log(addLetters('y', 'c', 'b'), 'd')
console.log(addLetters(), 'z')
console.log(addLetters("p", "r", "f", "l"), 'z')