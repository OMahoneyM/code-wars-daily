// Description:
// --------------------------------------
// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.


// Solution:
// --------------------------------------
const catMouse = x => x.slice(1,-1).length > 3 ? "Escaped!" : "Caught!";

console.log(catMouse('C...m'), "Caught!")
console.log(catMouse('C....m'), "Escaped!")


// Simpler Solution:
// --------------------------------------
function catMouse(x) {
    return x.length <= 5 ? 'Caught!' : 'Escaped!';
}