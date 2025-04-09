// Description:
// --------------------------------------
// Task

// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
// Notes

//     Array/list size is at least 2 .

//     Array/list's numbers Will be only Positives

//     Repetition of numbers in the array/list could occur.

// Input >> Output Examples

//     productArray ({12,20}) ==>  return {20,12}
    
//     Explanation:
    
//         The first element in prod [] array 20 is the product of all array's elements except the first element
    
//         The second element 12 is the product of all array's elements except the second element .
    
//     productArray ({1,5,2}) ==> return {10,2,5}
    
//     Explanation:
    
//         The first element 10 is the product of all array's elements except the first element 1
    
//         The second element 2 is the product of all array's elements except the second element 5
    
//         The Third element 5 is the product of all array's elements except the Third element 2.
    

// Solution:
// --------------------------------------
function productArray(nums){
    return nums.map((e, i, arr) => {
        return arr.filter((el, idx) => idx !== i).reduce((a, c) => a * c, 1)
    })
}

console.log(productArray([1, 2]), [2, 1])
console.log(productArray([1, 2, 3]), [6, 3, 2])
console.log(productArray([1, 2, 3, 3]), [18, 9, 6, 6])    


// Alt Solution:
// --------------------------------------
function productArray(nums){
    let sum = nums.reduce((a, c) => a * c, 1)
    return nums.map(e => sum / e)
}

console.log(productArray([1, 2]), [2, 1])
console.log(productArray([1, 2, 3]), [6, 3, 2])
console.log(productArray([1, 2, 3, 3]), [18, 9, 6, 6])