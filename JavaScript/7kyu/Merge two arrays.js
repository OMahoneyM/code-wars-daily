// Description:
// --------------------------------------
// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

// Points:

//     The arrays may be of different lengths, with at least one character/digit.
//     One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

// Inspired by https://adriann.github.io/programming_problems.html
  
            
// Solution:
// --------------------------------------
function mergeArrays(a, b) {
    let result = [];
    let len = a.length > b.length ? a.length : b.length

    for (let i = 0; i < len; i++){
        result.push(a[i])
        result.push(b[i])
    }

    return result.filter(e => e !== undefined);
}

console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]), ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5])
console.log(mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e"]), [1, "a", 2, "b", 3, "c", "d", "e"])
  
            
// Alt Solution:
// --------------------------------------
function mergeArrays(a, b) {
    let result = [];
    let len = a.length > b.length ? a.length : b.length

    for (let i = 0; i < len; i++){
        if(a[i]) { result.push(a[i]) }
        if(b[i]) { result.push(b[i]) }
    }

    return result;
}

console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]), ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5])
console.log(mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e"]), [1, "a", 2, "b", 3, "c", "d", "e"])