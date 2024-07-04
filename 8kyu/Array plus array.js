// Description:
// --------------------------------------
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


// Solution:
// --------------------------------------
function arrayPlusArray(arr1, arr2){
    return arr1.reduce((a,c) => a + c) + arr2.reduce((a,c) => a + c)
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) //21


// Alt Solution:
// --------------------------------------
function arrayPlusArray(arr1, arr2){
    return arr1.concat(arr2).reduce((a, c) => a + c);
}