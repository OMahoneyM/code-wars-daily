// Description:
// --------------------------------------
// Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

// You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

// For example:

// var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]


// Solution:
// --------------------------------------
function colourAssociation(array){
    return array.map(e => {
        let obj = {}
        obj[e[0]] = e[1]
        return obj
    })
}

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]), [ { white: 'goodness' }, { blue: 'tranquility' } ])


// Alt Solution:
// --------------------------------------
function colourAssociation(arr) {
    return arr.map(([a, b]) => ({ [a] : b }))
}

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]), [ { white: 'goodness' }, { blue: 'tranquility' } ])
