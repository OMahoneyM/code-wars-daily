// Description:
// --------------------------------------
// You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy health, and print status.


// Solution:
// --------------------------------------
var health = 100
var position = 0
var coins = 0

function main () {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}


// Alt Solution:
// --------------------------------------
var health = 100
var position = 0
var coins = 0

function main () {
  let actions = [rollDice, move, combat, getCoins, buyHealth, printStatus]
  return actions.forEach(e => e())
}