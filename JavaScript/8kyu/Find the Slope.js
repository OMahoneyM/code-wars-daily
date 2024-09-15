// Description:
// --------------------------------------
// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

//    a:x1
//    b:y1
//    c:x2
//    d:y2

// Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope


// Solution:
// --------------------------------------
function slope(points) {
    let deltaX = points[2] - points[0];
    let deltaY = points[3] - points[1];

    return deltaX === 0 ? 'undefined' : `${deltaY / deltaX}`;
}

console.log(slope([19,3,20,3])) // '0'