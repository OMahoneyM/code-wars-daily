// Description:
// --------------------------------------
// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)


// Solution:
// --------------------------------------
function reverse(arr) {
    let result = []
    for (let i = arr.length - 1; i >= 0; i--){
        result.push(arr[i])
    }
    return result;
}

console.log(reverse([1,2,3])) //[3,2,1]
console.log(reverse([1,null,14,"two"])) //["two",14,null,1]
console.log(reverse([612, 283, 87, 14, 925, 964, 845, 773, 232, 542, 188, 596, 399, 901]))