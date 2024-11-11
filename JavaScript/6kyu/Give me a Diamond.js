// Description:
// --------------------------------------
// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
// Task

// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
// Examples

// A size 3 diamond:

//  *
// ***
//  *

// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *

// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"


// Solution:
// --------------------------------------
function diamond(n) {
    //check for invalid inputs
    if (n < 1 || n % 2 === 0) return null;
    //set empty result variable
    let result = []
    for (let i = 0; i < (n - 1) / 2; i++) {
        result.push(" ".repeat(((n - 1) / 2) - i) + "*".repeat(i * 2 + 1) + "\n")
    }
    return [...result, "*".repeat(n) + "\n" ,...result.reverse()].join("");

}

console.log(diamond(3), "\n *\n***\n *\n")
console.log(diamond(5), "\n  *\n ***\n*****\n ***\n  *\n")
console.log(diamond(7), "\n   *\n  ***\n *****\n*******\n *****\n  ***\n   *\n")

console.log(diamond(-5), null)
console.log(diamond(4), null)