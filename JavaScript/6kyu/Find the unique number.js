// Description:
// -------------------------------------- 
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

//     Find the unique number (this kata)
//     Find the unique string
//     Find The Unique


// Solution:
// --------------------------------------
function findUniq(arr){
    let obj = {}

    for (let i of arr){
        obj[i] ? obj[i]++ : obj[i] = 1
    }

    for (let key in obj){
        if (obj[key] === 1){
            return Number(key)
        }
    }
}

console.log(findUniq([0,1,0,0]))


// Simpler Solution:
// --------------------------------------
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

console.log(findUniq([0,1,0,0,1,12,20,12]))
