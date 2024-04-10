// Description:
// --------------------------------------
// Your task is simply to count the total number of lowercase letters in a string.
// Examples

// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26


// Solution:
// --------------------------------------
function lowercaseCount(str){
    return str.split('').filter(e => /[a-z]/.test(e)).length;
}

console.log(lowercaseCount('abc')) //3
console.log(lowercaseCount('abcABC123')) //3


// Alt Solution:
// --------------------------------------
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}