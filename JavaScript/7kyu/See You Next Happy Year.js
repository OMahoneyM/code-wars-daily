// Description:
// --------------------------------------
// You're saying good-bye your best friend , See you next happy year .

// Happy Year is the year with only distinct digits , (e.g) 2018
// Task

// Given a year, Find The next happy year or The closest year You'll see your best friend

// Notes

//     Year Of Course always Positive .
//     Have no fear , It is guaranteed that the answer exists .
//     It's not necessary that the year passed to the function is Happy one .
//     Input Year with in range (1000  ≤  y  ≤  9000)

// Input >> Output Examples:

//     nextHappyYear (7712) ==> return (7801)
    
//     Explanation:
    
//     As the Next closest year with only distinct digits is 7801 . 


// Solution:
// --------------------------------------
function nextHappyYear(year){
    let happyYear = year + 1;
    let check = true

    while (check) {
       if(String(happyYear).split('').every((e, i, arr) => arr.lastIndexOf(e) === i)){
        check = false
       } else {
        happyYear++
       }
    }

    return happyYear;
}

console.log(nextHappyYear(7712), 7801)
console.log(nextHappyYear(8989), 9012)
console.log(nextHappyYear(1987), 2013)


// Recursive Solution:
// --------------------------------------
function nextHappyYear(year){
    let newYear = year + 1;
    let arr = String(newYear).split('')
    
    if (arr.join('') === Array.from(new Set(arr)).join('')) {
        return newYear
    } else {
        return nextHappyYear(newYear)
    }
}
console.log(nextHappyYear(7712), 7801)
console.log(nextHappyYear(8989), 9012)
console.log(nextHappyYear(1987), 2013)
