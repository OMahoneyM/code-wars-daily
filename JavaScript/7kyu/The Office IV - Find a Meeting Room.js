// Description:
// --------------------------------------
// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty

// If all rooms are busy, return "None available!"


// Solution:
// --------------------------------------
function meeting(x){
    let result = x.indexOf('O')
    return result >= 0 ? result : "None available!"
}

console.log(meeting(['X','O','X']), 1)
console.log(meeting(['O','O','X']), 0)
console.log(meeting(['X','X','X']), "None available!")