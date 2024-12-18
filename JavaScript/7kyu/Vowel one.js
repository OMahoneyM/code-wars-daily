// Description:
// --------------------------------------
// vowelOne

// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"


// Solution:
// --------------------------------------
function vowelOne(str) {
    let vowels = 'aeiou'
    let result = ''
    str = str.toLowerCase()
    for (let char of str) {
        (vowels.includes(char)) ? result += 1 : result += '0'
    }
    return result
}

console.log(vowelOne('abcdefg'), '1000100')
console.log(vowelOne('123, abc'), '00000100')


// Alt Solution:
// --------------------------------------
function vowelOne(str){
    return str.toLowerCase().split('').map(e => 'aeiou'.includes(e) ? "1" : "0").join('');
}

console.log(vowelOne('abcdefg'), '1000100')
console.log(vowelOne('123, Abc'), '00000100')
