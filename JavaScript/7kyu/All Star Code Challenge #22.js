// Description:
// --------------------------------------
// This Kata is intended as a small challenge for my students

// All Star Code Challenge #22

// Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

// Any remaining seconds left over are ignored.

// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"

// For example:

// 3600 --> "1 hour(s) and 0 minute(s)"
// 3601 --> "1 hour(s) and 0 minute(s)"
// 3500 --> "0 hour(s) and 58 minute(s)"
// 323500 --> "89 hour(s) and 51 minute(s)"


// Solution:
// --------------------------------------
function toTime(s){

    let hrs = Math.floor(s / 3600)
    let mins = Math.floor((s - hrs * 3600) / 60)
    
    return `${hrs} hour(s) and ${mins} minute(s)`

}

console.log(toTime(3600), "1 hour(s) and 0 minute(s)")
console.log(toTime(3601), "1 hour(s) and 0 minute(s)")
console.log(toTime(3500), "0 hour(s) and 58 minute(s)")
console.log(toTime(323500), "89 hour(s) and 51 minute(s)")


// Alt Solution:
// --------------------------------------
function toTime(s){

    let hrs = Math.floor(s / 3600)
    let mins = Math.floor((s % 3600) / 60)
    
    return `${hrs} hour(s) and ${mins} minute(s)`

}

console.log(toTime(3600), "1 hour(s) and 0 minute(s)")
console.log(toTime(3601), "1 hour(s) and 0 minute(s)")
console.log(toTime(3500), "0 hour(s) and 58 minute(s)")
console.log(toTime(323500), "89 hour(s) and 51 minute(s)")
