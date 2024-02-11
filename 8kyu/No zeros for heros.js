// Description:
// --------------------------------------
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// Zero alone is fine, don't worry about it. Poor guy anyway


// Solution:
// --------------------------------------
function noBoringZeros(n) {
    if (n === 0){
        return n
    } else {
        n = String(n)
        while (n.lastIndexOf('0') === n.length - 1){
            n = n.slice(0, n.length - 1)
        }
        return parseInt(n)
    }
}

console.log(noBoringZeros(100)) //1
console.log(noBoringZeros(101)) //101
console.log(noBoringZeros(0)) //0


// Alt Solution:
// --------------------------------------
function noBoringZeros(n) {
    while(n % 10 == 0 && n != 0){
        n /= 10;
    }
    return n;
}