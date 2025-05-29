// Description:
// --------------------------------------
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// The sub arrays may not be the same length.

// The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.


// Solution:
// --------------------------------------
function well(arr){
    let result = arr.flat().reduce((acc, cur) => {
        if (String(cur).toLowerCase() === "good") acc++
        return acc
    }, 0)

    return result < 1 ? "Fail!" : result < 3 ? "Publish!" : "I smell a series!"
}

console.log(well([["bad", "bad"], ["BAD", "BAd", "bad"]]), "Fail!")
console.log(well([["good", "bad"], ["BAD", "BAd", "bad"]]), "Publish!")
console.log(well([["good", "bad", "GOOD"], ["BAD", "gOod", "bad"]]), "I smell a series!")


// Alt Solution:
// --------------------------------------
function well(arr){
    let count = ("" + arr).match(/good/gi) || []
    return count < 1 ? "Fail!" : count < 3 ? "Publish!" : "I smell a series!"
}

console.log(well([["bad", "bad"], ["BAD", "BAd", "bad"]]), "Fail!")
console.log(well([["good", "bad"], ["BAD", "BAd", "bad"]]), "Publish!")
console.log(well([["good", "bad", "GOOD"], ["BAD", "gOod", "bad"]]), "I smell a series!")