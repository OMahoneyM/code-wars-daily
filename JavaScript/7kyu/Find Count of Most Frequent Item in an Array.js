// Description:
// --------------------------------------
// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
// Example

// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 

// The most frequent number in the array is -1 and it occurs 5 times.


// Solution:
// --------------------------------------
function mostFrequentItemCount(collection) {
    let hashMap = {}
    let mostFreq = 0

    for (let item of collection){
        hashMap[item] ? hashMap[item]++ : hashMap[item] = 1
    }

    for (let n in hashMap){
        if (hashMap[n] > mostFreq) {
            mostFreq = hashMap[n]
        }
    }

    return mostFreq
}

console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5)