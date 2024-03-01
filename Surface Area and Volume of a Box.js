// Description:
// --------------------------------------
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]


// Solution:
// --------------------------------------
function getSize(width, height, depth){
return new Array(2 * width * height + 2 * width * depth + 2 * depth * height, width * height * depth);
}

console.log(getSize(4,2,6)) //[88,48]