// Description:
// --------------------------------------
// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.


// Solution:
// --------------------------------------
function bingo(arr){
    let winningNums = [2, 9, 14, 7, 15]

    for (let num of winningNums) {
        if(!arr.some(e => e == num)) {
            return "LOSE"
            break
        }
    }

    return "WIN"
}

console.log(bingo([1,2,3,4,5,6,7,8,9,10]), "LOSE")
console.log(bingo([1,2,3,14,15,6,7,8,9,7]), "WIN")


// Alt Solution:
// --------------------------------------
function bingo(arr){
    return [2, 7, 9, 14, 15].every(e => arr.includes(e)) ? "WIN" : "LOSE"
}

console.log(bingo([1,2,3,4,5,6,7,8,9,10]), "LOSE")
console.log(bingo([1,2,3,14,15,6,7,8,9,7]), "WIN")
