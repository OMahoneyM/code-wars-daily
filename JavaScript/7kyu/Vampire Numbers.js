// Description:
// --------------------------------------
// Vampire Numbers

// Our loose definition of Vampire Numbers can be described as follows:

// 6 * 21 = 126
// # 6 and 21 would be valid 'fangs' for a vampire number as the 
// # digits 6, 1, and 2 are present in both the product and multiplicands

// 10 * 11 = 110
// # 110 is not a vampire number since there are three 1's in the
// # multiplicands, but only two 1's in the product

// Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.


// Solution:
// --------------------------------------
function vampireTest(a, b) {
  let product = String(a * b).split('').sort()
  let multiplicand = (String(a) + String(b)).split('').sort()
  let vampCheck = true

  for(let i = 0; i < multiplicand.length; i++){
    if (product[i] != multiplicand[i]){
        vampCheck = false
        break;
    } 
  }

  return vampCheck
}

console.log(vampireTest(6, 21), true)
console.log(vampireTest(10, 11), false)


// Alt Solution:
// --------------------------------------
function vampireTest(a, b) {
  let product = String(a * b).split('').sort().join('')
  let multiplicand = (String(a) + String(b)).split('').sort().join('')

  return product === multiplicand
}

console.log(vampireTest(6, 21), true)
console.log(vampireTest(10, 11), false)
