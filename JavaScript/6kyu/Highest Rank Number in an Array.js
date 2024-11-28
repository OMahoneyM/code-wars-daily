// Description:
// --------------------------------------
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


// Solution:
// --------------------------------------
function highestRank(arr){
    let freqMap = {}
    let count = 0
    let mostFreqNum = 0

    for (let num of arr) {
        freqMap[num] ? freqMap[num]++ : freqMap[num] = 1
    }

    for (let num in freqMap) {
        if (freqMap[num] > count) {
            count = freqMap[num]
            mostFreqNum = +num
        } else if (freqMap[num] === count && +num > mostFreqNum) {
            mostFreqNum = +num
        }
    }

    return mostFreqNum
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12)
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3)
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10, 10]), 10)