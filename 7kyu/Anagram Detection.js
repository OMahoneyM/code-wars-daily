// Description:
// --------------------------------------
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"


// Solution:
// --------------------------------------
function isAnagram(test, original){
    test = test.toLowerCase().split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
    original = original.toLowerCase().split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')

    return test === original
}


console.log(isAnagram('foefet', 'Toffee'))
console.log(isAnagram('pool', 'toffee'))



// Alt Solution:
// --------------------------------------
function isAnagram (test, original) {
	return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
}

console.log(isAnagram('foefet', 'Toffee'))
console.log(isAnagram('pool', 'toffee'))