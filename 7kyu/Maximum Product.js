// Description:
// --------------------------------------
// Task

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes

//     Array/list size is at least 2.

//     Array/list numbers could be a mixture of positives, negatives also zeroes .


// Solution:
// --------------------------------------
function adjacentElementsProduct(arr) {
    //set result variable to 0
    let result;
    //loop through array 
    arr.forEach((e, i, arr) => {
        //multiply element to following element
        let product = e * arr[i + 1];
        //test if value is > product
        if (product > result || result === undefined){
            //set product to value if value is larger
            result = product;
        }
    })
    //return result
    return result;
}

console.log(adjacentElementsProduct([1,2,3])) //6
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])) //50
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])) //-14


// Alt Solution:
// --------------------------------------
function adjacentElementsProduct(arr){
    let result = [];
    for(let i = 0; i < arr.length - 1; i++){
        result.push(arr[i] * arr[i + 1])
    }
    return Math.max(...result);
}

console.log(adjacentElementsProduct([1,2,3])) //6
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])) //50
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])) //-14