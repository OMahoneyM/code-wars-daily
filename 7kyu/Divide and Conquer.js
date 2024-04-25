// Description:
// --------------------------------------
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.


// Solution:
// --------------------------------------
function divCon(x){
    let nums = x.filter(e => typeof e === 'number').reduce((a, c) => a + c, 0);
    let strs = x.filter(e => typeof e === 'string').reduce((a, c) => +a + +c,0);

    return nums - strs
}

console.log(divCon([9,3,'7','3'])) //2


// Alt Solution:
// --------------------------------------
function divCon(x) {
    return x.reduce((a, c) => typeof c === 'number' ? a + c : a - +c, 0) 
}

console.log(divCon([9,3,'7','3'])) //2
