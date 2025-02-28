// Description:
// --------------------------------------
// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!
// Note

// 1 Dollar = 100 Cents


// Solution:
// --------------------------------------
function fuelPrice(litre, price){
    if (litre < 2) { return litre * price }
    if (litre < 4) { return +(litre * (price - 0.05)).toFixed(2) }
    if (litre < 6) { return +(litre * (price - 0.10)).toFixed(2) }
    if (litre < 8) { return +(litre * (price - 0.15)).toFixed(2) }
    if (litre < 10) { return +(litre * (price - 0.20)).toFixed(2) }
    return +(litre * (price - 0.25)).toFixed(2)
}
console.log(fuelPrice(1, 1.23), 1.23)
console.log(fuelPrice(5, 1.23), 5.65)
console.log(fuelPrice(8, 2.5), 18.40)


// Alt Solution:
// --------------------------------------
function fuelPrice(litres, price) {
    for (let i = 2; i <= 10; i += 2){
        if (litres >= i) { price -= 0.05 }
    }

    return Math.round(litres * price * 100) / 100;
}
console.log(fuelPrice(1, 1.23), 1.23)
console.log(fuelPrice(5, 1.23), 5.65)
console.log(fuelPrice(8, 2.5), 18.40)
