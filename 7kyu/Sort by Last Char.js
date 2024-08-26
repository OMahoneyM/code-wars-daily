// Description:
// --------------------------------------
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.


// Solution:
// --------------------------------------
function last(x){
    //split string into array
    //sort by last letter of each word
    //return array
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}
console.log(last('man i need a taxi up to ubud')) //['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
console.log(last('take me to semynak')) //['take', 'me', 'semynak', 'to']