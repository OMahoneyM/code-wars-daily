// Description:
// --------------------------------------
// Given a string, return a new string that has transformed based on the input:

//     Change case of every character, ie. lower case to upper case, upper case to lower case.
//     Reverse the order of words from the input.

// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"

// You may assume the input only contain English alphabet and spaces.


// Solution:
// --------------------------------------
function stringTransformer(str){
    //break string into array by spaces
    //map array
        //check if each letter is upper
            //replace with lower
        //else replace with upper
    //reverse array
    //join array
    return str.split(' ')
    .map((el) => {
        let transform = ''
        for (let letter of el){
            /[A-Z]/.test(letter) ? transform += letter.toLowerCase() : transform += letter.toUpperCase();
        }
        return transform;
    })
    .reverse()
    .join(' ');

}

console.log(stringTransformer('Example string')) //'STRING eXAMPLE'