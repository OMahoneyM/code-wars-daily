// Description:
// --------------------------------------
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). 


// Solution:
// --------------------------------------
function minValue(values){
    //filter based on whether indexOf === index
    //sort
    //join
    return +values.filter((e, i, arr) => arr.indexOf(e) === i).sort((a, b) => a - b).join('')
}

console.log(minValue([1,3,1])) //13