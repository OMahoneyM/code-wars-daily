// Description:
// --------------------------------------
// Remove all exclamation marks from the end of sentence.
// Examples

// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


// Solution:
// --------------------------------------
function remove (string) {  
    return string.replace(/!+$/,"")
}

console.log(remove('Hi!')) //Hi
console.log(remove('Hi! Hi!')) //Hi! Hi
console.log(remove('Hi! Hi!!!')) //Hi! Hi
console.log(remove('Hi')) //Hi