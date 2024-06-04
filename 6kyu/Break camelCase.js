// Description:
// --------------------------------------
// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


// Solution:
// --------------------------------------
function solution(s){
    if (s.length === 0) return ""

    let phrase = ""

    for(let letter of s){
        if((letter.charCodeAt(0) >= 65) && (letter.charCodeAt(0) <= 90)){
            phrase += ' ' + letter
        } else {
            phrase += letter
        }
    }
    return phrase
}

console.log(solution("camelCasingTest"))
console.log(solution(""))


// Regex Solution:
// --------------------------------------
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
}
