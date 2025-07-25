// Description:
// --------------------------------------
// Sort the given array of strings in alphabetical order, case insensitive. For example:

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]


// Solution:
// --------------------------------------
function sortme(names){
    return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
}

console.log(sortme( ["Hello", "there", "I'm", "fine"]), ["fine", "Hello", "I'm", "there"])
console.log(sortme(["C", "d", "a", "B"]), ["a", "B", "C", "d"])