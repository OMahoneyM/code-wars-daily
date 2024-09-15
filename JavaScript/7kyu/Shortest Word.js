// Description:
// --------------------------------------
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


// Solution:
// --------------------------------------
function findShort(s){
    return arr = s.split(' ').map(word => word.length).sort((a, b) => a - b).shift()
}