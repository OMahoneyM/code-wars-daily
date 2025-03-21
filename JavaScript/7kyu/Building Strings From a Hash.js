// Description:
// --------------------------------------
// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"


// Solution:
// --------------------------------------
function solution(pairs) {
    return result = Object.entries(pairs).map(e => e.join(" = ")).join(",");
}

console.log(solution({'a': 1, 'b': 2}), 'a = 1,b = 2')
console.log(solution({0:'a', 'b': 2}), '0 = a,b = 2')