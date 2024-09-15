// Description:
// --------------------------------------
// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// Good luck :)


// Solution:
// --------------------------------------
function nearestSq(n){
    //set variable for sqrt n and round down
    let low = Math.floor(Math.sqrt(n)) ** 2;
    //set variable for sqrt n and round up
    let high = Math.ceil(Math.sqrt(n)) ** 2;
    //test if difference between low and n is smaller than high and n
    if (n - low < high - n){
        //return low
        return low;
    } else {
        //else return high
        return high
    }
}

console.log(nearestSq(1)) //1
console.log(nearestSq(10)) //9
console.log(nearestSq(111)) //121


// Simple Solution:
// --------------------------------------
function nearestSq(n) {
    return Math.round(Math.sqrt(n)) ** 2;
}

console.log(nearestSq(1)) //1
console.log(nearestSq(10)) //9
console.log(nearestSq(111)) //121
