// Description:
// --------------------------------------
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.


// Solution:
// --------------------------------------
function mergeArrays(a, b) {
    return a.concat(b).filter((el, idx, arr) => idx === arr.lastIndexOf(el)).sort((a, b) => a - b);
}

console.log(mergeArrays([1,3,4], [2,6,5]), [1,2,3,4,5,6])
console.log(mergeArrays([1,3,4], [4,6,5]), [1,3,4,5,6])
