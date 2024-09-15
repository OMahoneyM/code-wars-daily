// Description:
// --------------------------------------
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)


// Solution:
// --------------------------------------
function solution(n){
    //set a result variable
    let result = 0;
    //loop from 1 to n
    for (let i = 1; i < n; i++){
        //test if i is divisible by 3
        if (i % 3 === 0){
            //add i to result
            result += i
        //else test if i is divisible by 5
        } else if (i % 5 === 0){
            //add i to result
            result += i
        }
    }
    //return result
    return result;
}

console.log(solution(10)) //23