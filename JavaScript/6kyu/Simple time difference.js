// Description:
// --------------------------------------
// In this Kata, you will be given a series of times at which an alarm sounds. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.

// For example:
// solve(["14:51"]) = "23:59". If the alarm sounds now, it will not sound for another 23 hours and 59 minutes.
// solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not sound is 11 hours and 40 minutes.

// In the second example, the alarm sounds 4 times in a day.

// More examples in test cases. Good luck!


// Solution:
// --------------------------------------
function solve(arr){
    let maxInterval = 0;

    UnqArr = [... new Set(arr.sort().map(e => {
        return e.split(':').map((e, i) => i===0 ? +e * 60 : +e).reduce((a, c) => a + c, 0)
    }))]

    UnqArr.push(UnqArr[0] + 1440)

    //return UnqArr

    //check if e[i] - e[i + 1] > duration
    for (let i = 0; i < UnqArr.length - 1; i++){
        let diff = UnqArr[i + 1] - (UnqArr[i] + 1)
        if (diff > maxInterval) { maxInterval = diff }
    }
        //set variable to the difference if so
    //convert difference to time value
    maxInterval = `${String(Math.floor(maxInterval / 60)).padStart(2, "0")}:${String(maxInterval % 60).padStart(2, "0")}`
    //return difference
    return maxInterval
}

console.log(solve(["01:27"]), "23:59")
console.log(solve(["23:00","04:22","18:05","06:24"]),"11:40")
console.log(solve(["21:14", "15:34", "14:51", "06:25", "15:30"]),"09:10")
