// Description:
// --------------------------------------
// Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

//     If the user tries to guess more than the limit, the function should throw an error.
//     If the user guess is right it should return true.
//     If the user guess is wrong it should return false and lose a life.

// Can you finish the game so all the rules are met?

      
// Solution:
// --------------------------------------
class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if (!this.lives) {
        throw new Error("Expect error already dead")
      } else if (n === this.number){
        return true
      } else {
        this.lives--
        return false;
      }
    }
}

let guesser = new Guesser(10, 2);
console.log(guesser.guess(1), false);
console.log(guesser.guess(2), false);
console.log(guesser.guess(3), "Expect error already dead");
console.log(guesser.guess(3), "Expect error already dead");

