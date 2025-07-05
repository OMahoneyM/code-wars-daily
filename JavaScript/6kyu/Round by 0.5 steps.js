// Description:
// --------------------------------------
// Round any given number to the closest 0.5 step

// I.E.

// solution(4.2) = 4
// solution(4.3) = 4.5
// solution(4.6) = 4.5
// solution(4.8) = 5

// Round up if number is as close to previous and next 0.5 steps.

// solution(4.75) == 5


// Solution:
// --------------------------------------
function solution(x){
    let lowInt = Math.floor(x)
    let highInt = Math.ceil(x)

    if (x - lowInt < 0.25) return lowInt
    if (highInt - x <= 0.25) return highInt
    if (x - lowInt >= 0.25 && highInt - x > 0.25) return lowInt + 0.5
}

console.log(solution(4), 4)
console.log(solution(4.2), 4)
console.log(solution(4.3), 4.5)
console.log(solution(4.6), 4.5)
console.log(solution(4.8), 5)
console.log(solution(4.75), 5)



// Alt Solution:
// --------------------------------------
function solution(x){
    return Math.round(x * 2) / 2
}

console.log(solution(4), 4)
console.log(solution(4.2), 4)
console.log(solution(4.3), 4.5)
console.log(solution(4.6), 4.5)
console.log(solution(4.8), 5)
console.log(solution(4.75), 5)
