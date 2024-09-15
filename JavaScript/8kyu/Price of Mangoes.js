// Description:
// --------------------------------------
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
// Examples

// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free


// Solution:
// --------------------------------------
function mango(quantity, price){
    //set total variables
    let total = 0;
    //for loop through quant
    for (let i = quantity; i > 0; i--){
        //add price if i is not multiple of 3
        if (i % 3 != 0){
            total += price;
        }
    }
    //return total
    return total;
}

console.log(mango(2, 3)) // 6
console.log(mango(3, 3)) // 6
console.log(mango(6, 3)) // 12


// Alt Solution:
// --------------------------------------
function mango (quant, price){
    return price * (quant - Math.floor(quant / 3));
}