// Description:
// --------------------------------------
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
// Example (Input --> Output)

// "CodEWaRs" --> [0,3,4,6]


// Solution:
// --------------------------------------
const capitals = word => {
    let result = []

    word.split('').forEach((e, i) => {
        if((e.charCodeAt(0) >= 65) && (e.charCodeAt(0) <= 90))
            result.push(i)
        })

    return result
}

console.log(capitals('CodEWaRs')) //[0,3,4,6]
