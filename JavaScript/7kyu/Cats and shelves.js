// Description:
// --------------------------------------
// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

// Input
// Start and finish shelf numbers (always positive integers, finish no smaller than start)

// Task
// Find the minimum number of jumps to go from start to finish

// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)


// Solution:
// --------------------------------------
function solution(start, finish){
    let diff = finish - start
    return Math.floor(diff / 3) + diff % 3
}

console.log(solution(1, 5), 2)