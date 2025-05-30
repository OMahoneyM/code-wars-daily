// Description:
// --------------------------------------
// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
// solve([5,4,3,2,1]) = [5,4,3,2,1]

// Notice that the last element is always included. All numbers will be greater than 0.

// More examples in the test cases.

// Good luck!


// Solution:
// --------------------------------------
function solve(arr){
    let result = []
    //for loop that slices the arr by idx
    for (let i = 0; i < arr.length; i++){
        let currentNum = arr[i]
        //filter the array if the values are > e
        let slicedArr = arr.slice(i + 1).filter(e => e >= currentNum)
        //if array.length === 0 push value
        if (slicedArr.length === 0) { result.push(currentNum) }

    }
    return result
}

console.log(solve([5,4,3,2,1]), [5,4,3,2,1])
console.log(solve([1,2,3,4,5]), [5])
console.log(solve([1,21,4,7,5]), [21,7,5])
console.log(solve([16,17,14,3,14,5,2]), [17,14,5,2])


// Alt Solution:
// --------------------------------------
function solve(arr){
    return arr.filter((e, idx) => e > Math.max(...arr.slice(idx + 1)))
}
console.log(solve([5,4,3,2,1]), [5,4,3,2,1])
console.log(solve([1,2,3,4,5]), [5])
console.log(solve([1,21,4,7,5]), [21,7,5])
console.log(solve([16,17,14,3,14,5,2]), [17,14,5,2])
