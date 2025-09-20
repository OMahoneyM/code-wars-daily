// Description:
// --------------------------------------
// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"


// Solution:
// --------------------------------------
function spongeMeme(sentence) {
  sentence = sentence.toLowerCase()
  let result = ""
  
  for (let i = 0; i < sentence.length; i++){
    (i % 2) ? result += sentence[i] : result += sentence[i].toUpperCase()
  }
  
  return result;
}



// Alt Solution:
// --------------------------------------
function spongeMeme(sentence) {
    return sentence.split('').map((e, i) => (i % 2) ? e.toLowerCase() : e.toUpperCase()).join('');
} 