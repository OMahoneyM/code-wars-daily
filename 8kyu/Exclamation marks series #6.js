// Description:
// --------------------------------------
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples

// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"


// Solution:
// --------------------------------------
function remove(s,n){
    //variable for result
    let result = ''
    //loop through letters
    for (let letter of s){
        //if letter is !
        if (letter === '!'){
            if (n > 0) {
                n--
            } else {
                result += letter
            } 
        } else {
            result += letter
        }
    }
    //return result
    return result;
}

console.log(remove("Hi!", 1)) //Hi
console.log(remove("Hi!!", 1)) //Hi!
console.log(remove("!Hi!",100)) //Hi


// Alt Solution:
// --------------------------------------
function remove(s,n) {
    for (let i = 0; i < n; i++) {
        s = s.replace('!', '');
    }
    return s
}

console.log(remove("Hi!", 1)) //Hi
console.log(remove("Hi!!", 1)) //Hi!
console.log(remove("!Hi!",100)) //Hi
