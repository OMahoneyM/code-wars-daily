// Description:
// --------------------------------------
// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.


// Solution:
// --------------------------------------
String.prototype.vowel = function() {
    if (this.length === 1) {
        return /[aeiou]/i.test(this)
    }
    return false;
};

console.log('a'.vowel(), true)
console.log('E'.vowel(), true)
console.log('ae'.vowel(), false)
console.log('t'.vowel(), false)


// Alt Solution:
// --------------------------------------
String.prototype.vowel = function() {
    return /^[aeiou]$/i.test(this)
};

console.log('a'.vowel(), true)
console.log('E'.vowel(), true)
console.log('ae'.vowel(), false)
console.log('t'.vowel(), false)