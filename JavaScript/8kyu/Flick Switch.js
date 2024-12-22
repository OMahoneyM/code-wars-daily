// Description:
// --------------------------------------
// Task

// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.
// Examples

// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

// Notes

//     "flick" will always be given in lowercase.
//     A list may contain multiple flicks.
//     Switch the boolean value on the same element as the flick itself.


// Solution:
// --------------------------------------
function flickSwitch(arr){
    let result = []
    let bool = true
    for (let el of arr) {
        if (el === 'flick') {
            bool = !bool
            result.push(bool)
        } else {
            result.push(bool)
        }
    }

    return result
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]), [true, false, false, false])
console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]), [true, true, false, false, true])
console.log(flickSwitch(["bicycle"]), [true])
console.log(flickSwitch(["flick"]), [true])


// Alt Solution:
// --------------------------------------
function flickSwitch(arr){
    let flick = true;
    return arr.map(e => e === "flick" ? flick = !flick: flick)
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]), [true, false, false, false])
console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]), [true, true, false, false, true])
console.log(flickSwitch(["bicycle"]), [true])
console.log(flickSwitch(["flick"]), [true])
