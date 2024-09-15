// Description:
// --------------------------------------
// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


// Solution:
// --------------------------------------
function towerBuilder(n){
    let tower = []
    for (let i = 1; i <= n; i++){
        let tier = ''
        for(let j = 1; j <= (i + (i - 1)); j++){
            tier += '*'
        }

        if (tier.length < n + (n - 1)){
            for (let k = 0; k < (n - i); k++){
                tier = ' ' + tier + ' '
            }
        }

        tower.push(tier)
    }
    return tower
}

console.log(towerBuilder(3))
console.log(towerBuilder(6))

// Simpler Solution:
// --------------------------------------
function towerBuilder(nFloors) {
    let tower = [];
    for (let i = 0; i < nFloors; i++) {
      tower.push(" ".repeat(nFloors - i - 1)
               + "*".repeat((i * 2)+ 1)
               + " ".repeat(nFloors - i - 1));
    }
    return tower;
}