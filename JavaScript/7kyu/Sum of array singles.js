// Description:
// --------------------------------------
// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!


// Solution:
// --------------------------------------
function repeats(arr){
    let hashMap = {}
    let result = 0

    for (let num of arr){
        hashMap[num] ? hashMap[num]++ : hashMap[num] = 1 
    }

    for (let num in hashMap){
        if (hashMap[num] === 1) result += +num 
    }
    return result
};

console.log(repeats([4,5,7,5,4,8]), 15)


// Alt Solution:
// --------------------------------------
function repeats(arr){

    return arr.reduce((acc, cur) => arr.indexOf(cur) === arr.lastIndexOf(cur) ? acc += +cur : acc += 0, 0)
};

console.log(repeats([4,5,7,5,4,8]), 15)
