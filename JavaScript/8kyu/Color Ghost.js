// Description:
// --------------------------------------
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"


// Solution:
// --------------------------------------
class Ghost {
    constructor (){
        this.colors = ['white', 'yellow', 'purple', 'red']
    }

    get color(){
        let num = Math.floor(Math.random() * this.colors.length)
        return this.colors[num];
    }
}

console.log(new Ghost().color)