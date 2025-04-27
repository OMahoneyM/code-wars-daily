// Description:
// --------------------------------------
/*
Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
Examples

remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"
*/
  
// Solution:
// --------------------------------------
function remove(str) {    
    return str.split(" ").filter(e => (e.match(/!/g) || []).length !== 1).join(" ")
}

console.log(remove("Hi!"), "")
console.log(remove("Hi! Hi!"), "")
console.log(remove("Hi! Hi"), "Hi")
console.log(remove("!Hi!"), "!Hi!")
console.log(remove("Hi! !Hi! !Hi!"), "!Hi! !Hi!")


// Alt Solution:
// --------------------------------------
function remove(str){
    return str.split(" ").filter(e => e.split("!").length !== 2).join(" ")
}
console.log(remove("Hi!"), "")
console.log(remove("Hi! Hi!"), "")
console.log(remove("Hi! Hi"), "Hi")
console.log(remove("!Hi!"), "!Hi!")
console.log(remove("Hi! !Hi! !Hi!"), "!Hi! !Hi!")