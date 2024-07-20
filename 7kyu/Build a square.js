// Description:
// --------------------------------------
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
// Example

// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++


// Solution:
// --------------------------------------
function generateShape(integer){
    let square = []
    for (let i = 1; i <= integer; i++){
        let tier = ''
        for (let j = 1; j <= integer; j++){
            tier += '+'
        }
        square.push(tier)
    }
    return square.join('\n')
}

console.log(generateShape(3)) 
//+++
//+++
//+++
console.log(generateShape(8)) //'++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'



// Alt Solution:
// --------------------------------------
function generateShape(n){
    return ("+".repeat(n) + "\n").repeat(n).trim()
}