// Description:
// --------------------------------------
// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

//     A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
//     The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").


// Solution:
// --------------------------------------
function abbreviate(str) {
    let arr = str.split(/([-,!.\s]+)/g);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 3) {
            arr[i] = arr[i][0] + (arr[i].length - 2) + arr[i][arr[i].length - 1]
         }
    }
    return arr.join("");
}

console.log(abbreviate('elephant-rides are really fun!')) //"e6t-r3s are r4y fun!"
console.log(abbreviate("internationalization")) //"i18n"
console.log(abbreviate("You need, need not want, to complete this code-wars mission")) //'You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n'
