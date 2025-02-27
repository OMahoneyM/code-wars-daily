// Description:
// --------------------------------------
// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// "abraxxxas" → true
// "xoxotrololololololoxxx" → false
// "softX kitty, warm kitty, xxxxx" → true
// "softx kitty, warm kitty, xxxxx" → false

// Note :

//     capital X's do not count as an occurrence of "x".
//     if there are no "x"'s then return false


// Solution:
// --------------------------------------
function tripleX(str){
    for (let i = 0; i < str.length; i++){
        if (str[i] === "x"){
            return str.slice(i, i + 3) === "xxx"
        } else {
            return false
        }
    }
    return false
}

console.log(tripleX("abcxxx"), true)
console.log(tripleX("xabcxxx"), false)
console.log(tripleX("Xabcxxx"), true)


// Alt Solution:
// --------------------------------------
function tripleX(str){
    let x = str.indexOf("x")
    return x > -1 && x === str.indexOf("xxx")
}
console.log(tripleX("abcxxx"), true)
console.log(tripleX("xabcxxx"), false)
console.log(tripleX("Xabcxxx"), true)
