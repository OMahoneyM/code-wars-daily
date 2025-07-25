// Description:
// --------------------------------------
// A new task for you!

//     You have to create a method, that corrects a given time string.
//     There was a problem in addition, so many of the time strings are broken.
//     Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.

// Examples

// "09:10:01" -> "09:10:01"  
// "11:70:10" -> "12:10:10"  
// "19:99:99" -> "20:40:39"  
// "24:01:01" -> "00:01:01"  

// If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.


// Solution:
// --------------------------------------
function timeCorrect(timestring) {
    if (timestring === "") { return timestring }
    if (!timestring || !timestring.includes(":") || timestring.match(/[a-z]/gi)) { return null }
    let result = timestring.split(":").map(e => +e)

    if (result[2] > 59){
        result[2] -= 60 
        result[1]++
    }

    if (result[1] > 59){
        result[1] -= 60 
        result[0]++
    }
    
    if (result[0] > 23){
        result[0] = result[0] % 24 
    }

    return result.map(e => String(e).length === 1 ? "0" + e : e).join(":")
}

console.log(timeCorrect("09:10:01"), "09:10:01")
console.log(timeCorrect("11:70:10"),"12:10:10")
console.log(timeCorrect("19:99:99"),"20:40:39")
console.log(timeCorrect("24:01:01"),"00:01:01")
console.log(timeCorrect("25:01:01"),"01:01:01")
console.log(timeCorrect(null), null)
console.log(timeCorrect("1234"), null)
console.log(timeCorrect("12:3s:04"), null)


// Alt Solution:
// --------------------------------------
function timeCorrect(timeStr) {
    if (!timeStr) { return timeStr }

    if (!/^(\d\d:){2}\d\d$/.test(timeStr)) { return null }

    return (new Date(0, 0, 0, ...timeStr.split(":"))).toString().slice(16, 24)
}

console.log(timeCorrect("09:10:01"), "09:10:01")
console.log(timeCorrect("11:70:10"),"12:10:10")
console.log(timeCorrect("19:99:99"),"20:40:39")
console.log(timeCorrect("24:01:01"),"00:01:01")
console.log(timeCorrect("25:01:01"),"01:01:01")
console.log(timeCorrect(null), null)
console.log(timeCorrect("1234"), null)
console.log(timeCorrect("12:3s:04"), null)
