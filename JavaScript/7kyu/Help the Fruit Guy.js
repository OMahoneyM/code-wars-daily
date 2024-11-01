// Description:
// --------------------------------------
// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
// Notes

//     If the array is null/nil/None or empty you should return empty array ([]).
//     The rotten fruit name will be in this camelcase (rottenFruit).
//     The returned array should be in lowercase.


// Solution:
// --------------------------------------
function removeRotten(bagOfFruits){
    //map array
        //if word begins with rotten
            //replace rotten with nothing
            //toLowerCase()
        //else
            //return word
    if (!bagOfFruits) return []
    return bagOfFruits.map(el => {
        if (el.includes('rotten')) {
            return el.replace('rotten', '').toLowerCase();
        } else {
            return el;
        }
    })
}

console.log(removeRotten(['apple', 'pear', 'rottenBanana', 'apple']), ['apple', 'pear','banana','apple'])
console.log(removeRotten([]), [])
console.log(removeRotten(null), [])


// Alt Solution:
// --------------------------------------
function removeRotten(bagOfFruits){
    return bagOfFruits ? bagOfFruits.map(e => e.replace('rotten', '').toLowerCase()) : [];
}

console.log(removeRotten(['apple', 'pear', 'rottenBanana', 'apple']), ['apple', 'pear','banana','apple'])
console.log(removeRotten([]), [])
console.log(removeRotten(null), [])