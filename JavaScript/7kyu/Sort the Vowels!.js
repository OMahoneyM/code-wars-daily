// Description:
// --------------------------------------
// In this kata, we want to sort the vowels in a special format.
// Task

// Write a function which takes a input string s and return a string in the following way:

   
//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|

// Notes:

//     List all the Vowels on the right side of |
//     List every character except Vowels on the left side of |
//     for the purpose of this kata, the vowels are : a e i o u
//     Return every character in its original case
//     Each line is seperated with \n
//     Invalid input ( undefined / null / integer ) should return an empty string


// Solution:
// --------------------------------------
function sortVowels(s) {
    let result = []
    if (typeof s === 'string'){
    for (let letter of s){
        /[aeiouAEIOU]/.test(letter) ? result.push(`|${letter}`) : result.push(`${letter}|`)
    }
    }

    return result.length > 0 ? result.join('\n') : ''
}

console.log(sortVowels('Codewars'), 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|')
console.log(sortVowels(null), '')


// Alt Solution:
// --------------------------------------
function sortVowels(s) {
    return typeof s !== 'string' ? '' : [...s].map(e => /aeiou/i.test(e) ? `|${e}` : `${e}|`).join('\n')
}

console.log(sortVowels('Codewars'), 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|')
console.log(sortVowels(null), '')
