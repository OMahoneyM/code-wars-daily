// Description:
// --------------------------------------
// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!


// Solution:
// --------------------------------------
function solve(s) {
    return Math.max(...s.replace(/[^aeiou]/gi, ' ').split(' ').map(e => e.length))
}

console.log(solve("codewarriors")) //2
console.log(solve("ultrarevolutionariees")) //3
console.log(solve("iiihoovaeaaaoougjyaw")) //8
console.log(solve("scccccc")) //0
