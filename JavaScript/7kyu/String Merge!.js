// Description:
// --------------------------------------
// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.
// Examples

// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"


// Solution:
// --------------------------------------
function stringMerge(string1, string2, letter){
    let str1Idx = string1.split('').indexOf(letter)
    let str2Idx = string2.split('').indexOf(letter)

    return string1.slice(0, str1Idx) + string2.slice(str2Idx)

}

console.log(stringMerge("hello", "world", "l"), "held")
console.log(stringMerge("jason", "samson", "s"), "jasamson")


// Alt Solution:
// --------------------------------------
const stringMerge = (str1, str2, letter) => str1.slice(0, str1.indexOf(letter)) + str2.slice(str2.indexOf(letter))

console.log(stringMerge("hello", "world", "l"), "held")
console.log(stringMerge("jason", "samson", "s"), "jasamson")
