// Description:
// --------------------------------------
// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"


// Solution:
// --------------------------------------
function correctPolishLetters (str) {
    let charMap = {
        "ą" : "a",
        "ć" : "c",
        "ę" : "e",
        "ł" : "l",
        "ń" : "n",
        "ó" : "o",
        "ś" : "s",
        "ź" : "z",
        "ż" : "z"
    }
    
    let newStr = '';
    
    for(let char of str){
        charMap[char] ? newStr += charMap[char] : newStr += char;
    }

    return newStr;
}

console.log(correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski")