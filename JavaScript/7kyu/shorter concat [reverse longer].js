// Description:
// --------------------------------------
// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b


// Solution:
// --------------------------------------
function shorterReverseLonger(a, b){
    if (b.length > a.length) {
        return a + b.split('').reverse().join('') + a
    } else {
        return b + a.split('').reverse().join('') + b
    }
}

console.log(shorterReverseLonger('first', 'second'), 'firstdnocesfirst')
console.log(shorterReverseLonger('one', 'two'), 'twoenotwo')
console.log(shorterReverseLonger('', 'second'), 'dnoces')