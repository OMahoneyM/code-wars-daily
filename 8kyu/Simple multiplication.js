// Description:
// --------------------------------------
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


// Solution:
// --------------------------------------
function simpleMultiplication(num){
   return num % 2 === 0 ? num * 8 : num * 9;
}

console.log(simpleMultiplication(2)) //16
console.log(simpleMultiplication(3)) //27


// Alt Solution:
// --------------------------------------
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}