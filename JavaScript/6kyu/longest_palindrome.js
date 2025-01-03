// Description:
// --------------------------------------
// Longest Palindrome

// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.
// Example:

// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0


// Solution:
// --------------------------------------
function checkPalindrome(str) {
    let reverseStr = str.split("").reverse().join("");
    
    return str === reverseStr;
}
  
function longestPalindrome(s){
    let result = 0;
    
    for(let i = 0; i < s.length; i++) {
        for(let j = i + 1; j <= s.length ; j++) {
            let word = s.slice(i, j);
            let wordLen = word.length;
        
            if(checkPalindrome(word) && result < wordLen) {
                result = wordLen;
            }
        }
    }
    
    return result;
}

console.log(longestPalindrome(""), 0)
console.log(longestPalindrome("aab"), 2)
console.log(longestPalindrome("abcde"), 1)
console.log(longestPalindrome("zzbaabcd"), 4)
