// Description:
// --------------------------------------
// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.


// Solution:
// --------------------------------------
function dbSort(a){
    let nums = a.filter(e => typeof e === 'number').sort((a, b) => a - b)
    let strs = a.filter(e => typeof e === 'string').sort()

    return nums.concat(strs)
}

console.log(dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]), [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach'])