// Description:
// --------------------------------------
// Given a string of space separated words, return the longest word.
// If there are multiple longest words, return the rightmost longest word.
// Examples

// "red white blue"  =>  "white"
// "red blue gold"   =>  "gold"


// Solution:
// --------------------------------------
function longestWord(str) {
    let result = "";
  
    str.split(' ').reverse().forEach(e => {if(e.length > result.length) {result = e}})
    
    return result;
}

console.log(longestWord("red white blue"), "white")
console.log(longestWord("red white blorf"), "blorf")
console.log(longestWord("red blue gold"), 'gold')


// Alt Solution:
// --------------------------------------
const longestWord = s => s.split(' ').reduceRight((a, b)=>(b.length > a.length) ? b : a);