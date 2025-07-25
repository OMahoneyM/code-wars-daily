// Description:
// --------------------------------------
// This Kata is intended as a small challenge for my students

// Your family runs a shop and have just brought a Scrolling Text Machine (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg) to help get some more business.

// The scroller works by replacing the current text string with a similar text string, but with the first letter shifted to the end; this simulates movement.

// Your father is far too busy with the business to worry about such details, so, naturally, he's making you come up with the text strings.

// Create a function that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.
// Examples:

// "Hello" --> ["elloH", "lloHe", "loHel", "oHell", "Hello"]

// Note:

//     The original string should be included in the output array.

//     The order matters. Each element of the output array should be the rotated version of the previous element.

//     The output array SHOULD be the same length as the input string.

//     The function should return an empty array with an empty string ('') as input.


// Solution:
// --------------------------------------
function rotate(str){
  let currentStr = str;
  let result = []
  for (let i = 0; i < str.length; i++) {
    let firstLetter = currentStr[0];
    let newWord = currentStr.substring(1) + firstLetter
    result.push(newWord);
    currentStr = newWord;
    }
  return result;
}

console.log(rotate("Hello"), ["elloH", "lloHe", "loHel", "oHell", "Hello"])
console.log(rotate(""), [])


// Alt Solution:
// --------------------------------------
function rotate(s){
  return s.split("").map(e => s = s.slice(1) + s.slice(0, 1));
}
console.log(rotate("Hello"), ["elloH", "lloHe", "loHel", "oHell", "Hello"])
console.log(rotate(""), [])
