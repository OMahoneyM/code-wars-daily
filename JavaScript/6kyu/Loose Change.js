// Description:
// --------------------------------------
// Welcome young Jedi!

// In this Kata, you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount.

// The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢).

// Therefore, the dictionary returned should contain exactly 4 key/value pairs.

// Notes:

//     If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
//     If a float is passed into the function, its value should be rounded down, and the resulting dictionary should never contain fractions of a coin.

// Examples

// 56    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
// -435  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
// 4.935 ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}


// Solution:
// --------------------------------------
function looseChange(cents){
  let change = {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0};
  cents = Math.floor(cents);

  while (cents > 0){
        if(cents - 25 >= 0){
            change.Quarters++
            cents -= 25
        } else if(cents - 10 >= 0) {
            change.Dimes++
            cents -= 10
        } else if(cents - 5 >= 0) {
            change.Nickels++
            cents -= 5
        } else if(cents - 1 >= 0) {
            change.Pennies++
            cents -= 1
        }
  }

  return change;
}

console.log(looseChange(56), {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2})
console.log(looseChange(4.9), {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0})
console.log(looseChange(-5), {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0})



// Solution:
// --------------------------------------
function looseChange(cents){
    let change = {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0};
    if (cents <= 0) return change;

    change.Quarters = Math.floor(cents / 25);
    change.Dimes = Math.floor(cents % 25 / 10);
    change.Nickels = Math.floor(cents % 25 % 10 / 5);
    change.Pennies = Math.floor(cents % 25 % 10 % 5);

    return change;
}

console.log(looseChange(56), {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2})
console.log(looseChange(4.9), {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0})
console.log(looseChange(-5), {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0})