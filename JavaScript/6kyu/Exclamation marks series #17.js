// Description:
// --------------------------------------
// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".
// Examples

// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"


// Solution:
// --------------------------------------
function countMarks(str){
    let count = 0
    for (let letter of str){
        if (letter === "!") count += 2
        if (letter === "?") count += 3
    }

    return count
}

function balance(left, right){
    let leftCount = countMarks(left)
    let rightCount = countMarks(right)

    return leftCount > rightCount ? "Left" : leftCount < rightCount ? "Right" : "Balance"

}

console.log(balance("!!", "??"), "Right")
console.log(balance("!??", "?!!" ), "Left")
console.log(balance("!?!!", "?!?"), "Left")
console.log(balance("!!???!????", "??!!?!!!!!!!"), "Balance")



// Alt Solution:
// --------------------------------------
function balance(left, right){
    const weight = str => [...str].map(e => e === "!" ? 2 : e === "?" ? 3 : 0).reduce((acc, cur) => acc + cur, 0) 

    let diff = weight(left) - weight(right)

    return diff < 0 ? "Right" : diff > 0 ? "Left" : "Balance"
}

console.log(balance("!!", "??"), "Right")
console.log(balance("!??", "?!!" ), "Left")
console.log(balance("!?!!", "?!?"), "Left")
console.log(balance("!!???!????", "??!!?!!!!!!!"), "Balance")