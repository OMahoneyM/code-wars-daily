// Description:
// --------------------------------------
// So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!! You need to find some quick.... check all the other meeting rooms to see if all of the chairs are in use.

// Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.

// Find the spare chairs from the array of meeting rooms. Each meeting room tuple will have the number of occupants as a string. Each occupant is represented by 'X'. The room tuple will also have an integer telling you how many chairs there are in the room.

// You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.

// example:

// [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:

// result -> [0, 1, 3] no chairs free in room 0, take 1 from room 1, take 3 from room 2. no need to consider room 3 as you have your 4 chairs already.

// If you need no chairs, return "Game On". If there aren't enough spare chairs available, return "Not enough!".


// Solution:
// --------------------------------------
function meeting(arr, need) {
    if (need === 0) { return "Game On" }
    // create variable to hold need as count and result
    let chairCount = need
    let result = []

    //loop through array
    for (let i = 0; i < arr.length; i++){
        //if need > 0
        if (chairCount > 0){
            //push array[1] - array[0].length to result and subtract it from chairCount
            let freeChairs = arr[i][1] - arr[i][0].length
            if (freeChairs < 0) { 
                result.push(0)
            } else {
                result.push(freeChairs)
                chairCount -= freeChairs
            }
        }
    }
    //check if chaircount > 0
    if (chairCount > 0) {
        return "Not enough!"
    //else if charicount === 0    return chairCount

    } else if (chairCount === 0) {    
        return result
    } else {
        //return result[result.length - 1] = result[result.length - 1] + need
        result[result.length - 1] = result[result.length - 1] + chairCount
        return result
    }
}

console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]], 4), [0,1,3])
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXXX', 9], ['XXX', 5]], 4), [0,1,2,1])
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]], 0), "Game On")
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 6], ['XXX', 2]], 4), "Not enough!")
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5), [0, 0, 1, 2, 2])


// Alt Solution:
// --------------------------------------
function meeting(arr, need) {
    if (need <= 0) { return "Game On" }
    let result = []

    for (let [{ length: people }, chairs] of arr) {
        let chairsTaken = Math.min(Math.max(chairs - people, 0), need)
        result.push(chairsTaken)
        need -= chairsTaken

        if (need <= 0) { return result }
    }

    return "Not enough!"
}

console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]], 4), [0,1,3])
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXXX', 9], ['XXX', 5]], 4), [0,1,2,1])
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]], 0), "Game On")
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 6], ['XXX', 2]], 4), "Not enough!")
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5), [0, 0, 1, 2, 2])