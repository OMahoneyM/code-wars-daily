// Description:
// --------------------------------------
// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.


// Solution:
// --------------------------------------
function sumOfIntegersInString(s) {
    return s.split(/\D/).reduce((acc, cur) => acc + +cur, 0)
}
console.log(30+20+10+0+1203+914+3+1349+102+4
)

console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"), 3635)