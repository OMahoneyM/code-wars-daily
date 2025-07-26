// Description:
// --------------------------------------
// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.


// Solution:
// --------------------------------------
function winCheck(arr) {
    return [...arr[0]].map(e => e.charCodeAt()).includes(arr[1]) ? 1 : 0
}


function bingo(ticket, win){
    let winCount = ticket.reduce((acc, cur) => acc + winCheck(cur), 0)

    return winCount >= win ? "Winner!" : "Loser!"
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), "Loser!")
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), "Winner!")
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!')


// Alt Solution:
// --------------------------------------
function bingo(ticket, win){
    return ticket.filter(e => e[0].split('').some(b => b.charCodeAt() === e[1])).length >= win ? "Winner!" : "Loser!"
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), "Loser!")
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), "Winner!")
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!')
