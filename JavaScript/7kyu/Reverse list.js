// Description:
// --------------------------------------
// Write reverseList function that simply reverses lists.


// Solution:
// --------------------------------------
const reverseList = arr => arr.reverse();

console.log(reverseList([]), [])
console.log(reverseList([1,2,3]), [3,2,1])


// Alt Solution:
// --------------------------------------
function reverseList(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.shift(arr[i]);
    }
    return result;
}

console.log(reverseList([]), [])
console.log(reverseList([1,2,3]), [3,2,1])
