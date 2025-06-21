// Description:
// --------------------------------------
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


// Solution:
// --------------------------------------
function moveZeros(arr){
    //declare a result variable and filter arr of zeros
    let result = arr.filter(e => e !== 0);
    //declare a zeroArr variable and filter arr for zeros
    let zeroArr = arr.filter(e => e === 0);
    //concat result with zeroArr and return
    return result.concat(zeroArr);
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]), [false,1,1,2,1,3,"a",0,0])