// Description:
// --------------------------------------
// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.


// Solution:
// --------------------------------------
function sumNoDuplicates(numList) {
    let hashMap = {}
    for (let num of numList){
        hashMap[num] ? hashMap[num]++ : hashMap[num] = 1
    }
    return numList.filter(e => hashMap[e] === 1).reduce((a,c) => a + c, 0)
}

console.log(sumNoDuplicates([3,4,3,6]), 10)
console.log(sumNoDuplicates([3,4,3,6,6]), 4)
console.log(sumNoDuplicates([]), 0)