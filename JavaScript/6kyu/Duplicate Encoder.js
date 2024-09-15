// Description:
// --------------------------------------
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


// Solution:
// --------------------------------------
function duplicateEncode(word){
    word = word.toLowerCase()
    let obj ={}
    let newWord = ''

    for(let i of word){
        obj[i] ? obj[i]++ : obj[i] = 1
    }

    for(let letter of word){
        (obj[letter] > 1) ? newWord += ')' : newWord += '('
    }
  
    return newWord
}

console.log(duplicateEncode('din'))
console.log(duplicateEncode('recede'))
console.log(duplicateEncode('Success'))
console.log(duplicateEncode('(( @'))


// Alt Solution:
// --------------------------------------
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
}

console.log(duplicateEncode('Success'))
console.log(duplicateEncode('(( @'))