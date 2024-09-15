// Description:
// --------------------------------------
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// Solution:
// --------------------------------------
const countSheep = num => {
    let count = ""
    for(let i = 1; i <= num; i++){
        count += `${i} sheep...`
    }
    return count
};

console.log(countSheep(0))
console.log(countSheep(3))