// Description:
// --------------------------------------
// Scenario

// Now that the competition gets tough it will Sort out the men from the boys.

// Men are the Even numbers and Boys are the odd !alt !alt

// Task

// Given an array/list [] of n integers , Separate The even numbers from the odds, or Separate the men from the boys

// Notes

//     Return an array/list where Even numbers come first then odds

//     Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

//     Array/list size is at least 4 .

//     Array/list numbers could be a mixture of positives , negatives .

//     Have no fear , It is guaranteed that no Zeroes will exists . !alt

//     Repetition of numbers in the array/list could occur , So (duplications are not included when separating).


// Solution:
// --------------------------------------
function menFromBoys(arr){
    //create two new variables for evens and odds
    //filter for evens, odds, and dups
    //sort evens ascend and odds desc
    let evens = arr.filter((el, idx, ar) => el % 2 === 0 && ar.indexOf(el) === idx).sort((a, b) => a - b);
    let odds = arr.filter((el, idx, ar) => el % 2 != 0 && ar.indexOf(el) === idx).sort((a, b) => b - a);
    //return concat variables
    return evens.concat(odds);
}

console.log(menFromBoys([7,3,14,17])) //[14,17,7,3]
console.log(menFromBoys([82,91,72,76,76,100,85])) //[72,76,82,100,91,85]
console.log(menFromBoys([-94,-99,-100,-99,-96,-99])) //[-100,-96,-94,-99]
