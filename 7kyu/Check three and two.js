// Description:
// --------------------------------------
// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.
// Examples

// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"


// Solution:
// --------------------------------------
function checkThreeAndTwo(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++){
        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1
    }

    let result = Object.values(obj).sort();

    return (result[0] === 2) && (result[1] === 3);
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])) //true
console.log(checkThreeAndTwo(["a", "a", "a", "b", "c"])) //false