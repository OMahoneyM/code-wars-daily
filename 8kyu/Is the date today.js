// Description:
// --------------------------------------
// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.


// Solution:
// --------------------------------------
function isToday(date) {
    //get today's date
    //parse it into month day, year
    let today = new Date().toDateString();
    date = date.toDateString();
    //compare it to user input
    return today === date;
}

let today = new Date()
console.log(isToday(today))