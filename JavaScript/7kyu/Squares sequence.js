// Description:
// --------------------------------------
// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
// Examples

// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]


// Solution:
// --------------------------------------
function squares(x, n) {
    let result = []
    if (n > 0) {
        result.push(x)
        for(let i = 0; result.length < n; i++){
            result.push(result[i] ** 2)
        }
    }

    return result
}

console.log(squares(3,3), [3,9,81])
console.log(squares(3,0), [])