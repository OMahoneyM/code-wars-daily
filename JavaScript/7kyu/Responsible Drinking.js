// Description:
// --------------------------------------
// Welcome to the Codewars Bar!

// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.
// Examples

// "1 beer"  -->  "1 glass of water"
// because you drank one standard drink

// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
// because you drank ten standard drinks

// Note:

// To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...


// Solution:
// --------------------------------------
function hydrate(str) {
    let drinkTotal = str.replace(/\D/g, "").split("").reduce((a,c)=>a + +c, 0)
    return `${drinkTotal} glass${(drinkTotal > 1) ? "es" : ""} of water`
     
}
console.log(hydrate("1 beer"), "1 glass of water")
console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"), "10 glasses of water")