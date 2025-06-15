// Description:
// --------------------------------------
// Count how often sign changes in array.
// result

// number from 0 to ... . Empty array returns 0
// example

// const arr = [1, -3, -4, 0, 5];

// /*
// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |
// */

// catchSignChange(arr) == 2;


// Solution:
// --------------------------------------
function catchSignChange(arr) {
    let count = 0

    arr.forEach((e, i, arr) => (e >= 0 && arr[i+1] < 0) || (e < 0 && arr[i+1] >= 0) ? count++ : count)

    return count
}

console.log(catchSignChange([1, 2, -1, 2, 4]), 2)
console.log(catchSignChange([1, 2, 1, 2, 4]), 0)
console.log(catchSignChange([1, 2, -1, 0, 4]), 2)


// Alt Solution:
// --------------------------------------
const catchSignChange = a => a.reduce((s, b, i) => s + ((b >= 0 && a[i+1] < 0) || (b < 0 && a[i+1] >= 0) ? 1 : 0), 0);

console.log(catchSignChange([1, 2, -1, 2, 4]), 2)
console.log(catchSignChange([1, 2, 1, 2, 4]), 0)
console.log(catchSignChange([1, 2, -1, 0, 4]), 2)
