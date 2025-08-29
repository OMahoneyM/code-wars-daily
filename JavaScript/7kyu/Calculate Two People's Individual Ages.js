// Description:
// --------------------------------------
// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

//     sum < 0
//     difference < 0
//     Either of the calculated ages come out to be negative


// Solution:
// --------------------------------------
function getAges(sum,difference){
    let minAge = (sum - difference) / 2

    if (sum < 0 || difference < 0 || minAge < 0){ return null }

    return [minAge + difference, minAge]
};

console.log(getAges(24, 4), [14, 10])
console.log(getAges(63, -1), null)