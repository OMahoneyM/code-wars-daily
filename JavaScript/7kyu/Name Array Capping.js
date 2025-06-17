// Description:
// --------------------------------------
// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.
// Examples

// ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
// ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]


// Solution:
// --------------------------------------
function capMe(names) {
    return names.map(e => e[0].toUpperCase() + e.slice(1).toLowerCase())
}

console.log(capMe(["jo", "nelson", "jurie"]), ["Jo", "Nelson", "Jurie"])
console.log(capMe(["KARLY", "DANIEL", "KELSEY"]), ["Karly", "Daniel", "Kelsey"])