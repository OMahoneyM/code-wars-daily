// Description:
// --------------------------------------
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


// Solution:
// --------------------------------------
function uniqueInOrder(iterable) {
    // set variable to blank array
    let result = [];
    // for loop over iterable
    for (let i = 0; i < iterable.length; i++) {
        //if current does not equal next
        if (iterable[i] != iterable[i + 1]) {
            //push current to blank array
            result.push(iterable[i]);
        }
    }
    //return result
    return result;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) //['A','B','C','D','A','B']
console.log(uniqueInOrder([1,2,2,3,3])) //[1,2,3]


// Alt Solution:
// --------------------------------------
const uniqueInOrder = iterable => {
    return [...iterable].filter((el, idx, arr) => el !== arr[idx - 1]);
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) //['A','B','C','D','A','B']
console.log(uniqueInOrder([1,2,2,3,3])) //[1,2,3]