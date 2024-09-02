// Description:
// --------------------------------------
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.


// Solution:
// --------------------------------------
function tripleTrouble(one, two, three){
    let result = [];
    for (let i = 0; i < one.length; i++) {
        result.push(one[i])
        result.push(two[i])
        result.push(three[i])
    }
    return result.join('');
}

console.log(tripleTrouble("Sea","urn","pms")) //"Supermans"