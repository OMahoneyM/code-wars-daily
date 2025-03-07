// Description:
// --------------------------------------
// Count the number of exclamation marks and question marks, return the product.
// Examples

// ""          --->   0
// "!"         --->   0
// "!ab? ?"    --->   2
// "!!"        --->   0
// "!??"       --->   2
// "!???"      --->   3
// "!!!??"     --->   6
// "!!!???"    --->   9
// "!???!!"    --->   9
// "!????!!!?" --->  20


// Solution:
// --------------------------------------
function product(str){
    let eMarks = 0
    let qMarks = 0

    str.split("").forEach(e => e === "!" ? eMarks++ : e === "?" ? qMarks++ : e)

    return eMarks * qMarks
}

console.log(product(""), 0)
console.log(product("?"), 0)
console.log(product("!?"), 1)
console.log(product("!!ab ?"), 2)
console.log(product("Hello! Hello? Hello!?!"), 6)


// Alt Solution:
// --------------------------------------
function product(str){
    let eMarks = str.split("!").length - 1
    let qMarks = str.split("?").length - 1

    return eMarks * qMarks
}

console.log(product(""), 0)
console.log(product("?"), 0)
console.log(product("!?"), 1)
console.log(product("!!ab ?"), 2)
console.log(product("Hello! Hello? Hello!?!"), 6)