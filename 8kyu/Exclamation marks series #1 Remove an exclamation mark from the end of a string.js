// Description:
// --------------------------------------
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples

// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


// Solution:
// --------------------------------------
function remove(str){
    return str[str.length - 1] === '!' ? str.slice(0, str.length - 1) : str;
}

console.log(remove('Hi!'))
console.log(remove('!Hi!'))
console.log(remove('!Hi!!'))


// Alt Solution:
// --------------------------------------
const remove = s => s.replace(/!$/, '');