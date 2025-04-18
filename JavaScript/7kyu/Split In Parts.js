// Description:
// --------------------------------------
// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'

// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive


// Solution:
// --------------------------------------
function splitInParts(str, n) {
    let result = []

    for (let i = 0; i < str.length; i += n){
        result.push(str.slice(i, i + n))
    }

    return result.join(" ");
}

console.log(splitInParts("supercalifragilisticexpialidocious", 3), 'sup erc ali fra gil ist ice xpi ali doc iou s')