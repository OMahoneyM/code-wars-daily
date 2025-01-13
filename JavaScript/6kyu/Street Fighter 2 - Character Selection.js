// Description:
// --------------------------------------
// You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. 

// Selection Grid Layout in text:

// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |

// Input

//     the list of game characters in a 2x6 grid;
//     the initial position of the selection cursor (top-left is (0,0));
//     a list of moves of the selection cursor (which are up, down, left, right);

// Output

//     the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);

// Rules

// Selection cursor is circular horizontally but not vertically!

// As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

// Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

// Test

// For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

// Notice: changing some of the input data might not help you.

// Examples

//     fighters = [
//       ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//       ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
//     ]
//     initial_position = (0,0)
//     moves = ['up', 'left', 'right', 'left', 'left']

//     then I should get:

//     ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']

//     as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

//     fighters = [
//       ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//       ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
//     ]
//     initial_position = (0,0)
//     moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']

//     Result:

//     ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']


// Solution:
// --------------------------------------
function checkMovesX(move, x) {
    if(move === "up" || move === "down") {
        return x
    } else if ((move === "left" && x === 0)){
        return 5
    } else if (move === "right" && x === 5){
        return 0
    } else if (move === "right"){
        return x += 1
    } else if (move === "left"){
        return x -= 1
    }
}

function checkMovesY(move, y) {
    if ((move === "up" && y === 0 ) || (move === "down" && y === 1) || move === "right" || move === "left"){
        return y
    } else if (move === "down") {
        return y += 1
    } else if (move === "up"){
        return y -= 1
    }
}

function streetFighterSelection(fighters, position, moves){
    //declare empty array variable to house players
    let fighterTracker = []
    let x = position[1]
    let y = position[0]

    //loop through moves
    for(let move of moves){
        //update x position
        x = checkMovesX(move, x)
        //update y positon
        y = checkMovesY(move, y)
        //push fighter at x,y to array
        fighterTracker.push(fighters[y][x])
    }
    
    return fighterTracker;
}

let fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

console.log(streetFighterSelection(
        fighters, 
        [0,0],
        ['up', 'left', 'right', 'left', 'left']
    ), 
    ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
)
console.log(streetFighterSelection(
        fighters, 
        [0,0],
        ['right', 'down', 'left', 'left', 'left', 'left', 'right']
    ), 
    ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']
)


// Alt Solution:
// --------------------------------------
function streetFighterSelection(fighters, position, moves){
    let fighterTracker = []
    let y = position[0]
    let x = position[1]

    for (let i = 0;i < moves.length; i++){
        if (moves[i] === 'left'){
            x--
            if(x < 0){
                x = 5
            }
            fighterTracker.push(fighters[y][x])
        }
        if (moves[i] === 'right'){
            x++
            if(x > 5){
                x = 0
            }
            fighterTracker.push(fighters[y][x])
        }
        if (moves[i] === 'up'){ 
            y++
            if(y > 0){
                y = 0
            }
            fighterTracker.push(fighters[y][x])}
        if (moves[i] === 'down'){
            y--
            if(y < 1){
                y = 1
            }
            fighterTracker.push(fighters[y][x])}} 
    return fighterTracker;
}

console.log(streetFighterSelection(
    fighters, 
    [0,0],
    ['up', 'left', 'right', 'left', 'left']
), 
['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
)