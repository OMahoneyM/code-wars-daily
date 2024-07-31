// Description:
// --------------------------------------
//Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD


// Solution:
// --------------------------------------
function alternateCase(s) {
    return s.split('').map(el => {
        if (el.charCodeAt() >= 97 && el.charCodeAt() <= 122) {
            return el.toUpperCase();
        } else if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) {
            return el.toLowerCase();
        } else {
            return el;
        }
    }).join('');
}

console.log(alternateCase('Hello World')) //'hELLO wORLD'


// Alt Solution:
// --------------------------------------
function alternateCase(s) {
    return s.split('').map(el => {
        return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
    }).join('');
}