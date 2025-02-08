// Description:
// --------------------------------------
// There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.


// Solution:
// --------------------------------------
function createDict(keys, values) {
    let dict = {};

    for (let i = 0; i < keys.length; i++){
        (values[i] === undefined) ? dict[keys[i]] = null : dict[keys[i]] = values[i]
    }

    return dict;
}

console.log(createDict(['a','b','c','d'], [1,2,3,4]), {'a': 1, 'b': 2, 'c': 3, 'd': 4})
console.log(createDict(['a','b','c','d'], [1,2,3]), {'a': 1, 'b': 2, 'c': 3, 'd': null})
console.log(createDict(['a','b','c'], [1,2,3,4]), {'a': 1, 'b': 2, 'c': 3})