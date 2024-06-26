// Description:
// -------------------------------------- 
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


// Solution:
// --------------------------------------
function high(x){
    const wordList = x.split(' ');
  
    // calculate each word score to another array.
    const getScore = (word) => {
      return word.split('').reduce((prevScore, currWord) => prevScore + currWord.charCodeAt(0) - 96, 0)
    }  

    const scoreList = wordList.map(word => getScore(word));
  
    // get the highest score and index
    let highestIndex = 0;
    let highestScore = 0;

    scoreList.forEach((score, i) => {
      if (score > highestScore) {
        highestIndex = i;
        highestScore = score;
      }
    });
    
    // return the string of the highest score index of wordList
    return wordList[highestIndex];
}

console.log(high('man i need a taxi up to ubud'))


// Simpler Solution:
// --------------------------------------
function high(s){
    let as = s.split(' ').map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}

console.log('A'.charCodeAt(0))