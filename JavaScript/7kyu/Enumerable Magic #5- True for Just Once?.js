// Description:
// --------------------------------------
// Create a function called one that accepts two params:

//     a sequence
//     a function

// and returns true only if the function in the params returns true for exactly one (1) item in the sequence.
// Example

// one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) -> true
// one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) -> false
// one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) -> false


// Solution:
// --------------------------------------
function one(arr, fun){
    let trueCnt = arr.map(fun).filter(e => e).length
        
    return trueCnt === 1
}

console.log(one([1,2,3,4,5], function(item){ return item<2 }), true)
console.log(one([1,2,3,4,5], function(item){ return item<3 }), false)


// Alt Solution:
// --------------------------------------
const one = (arr, fun) => arr.filter(fun).length === 1

console.log(one([1,2,3,4,5], function(item){ return item<2 }), true)
console.log(one([1,2,3,4,5], function(item){ return item<3 }), false)
