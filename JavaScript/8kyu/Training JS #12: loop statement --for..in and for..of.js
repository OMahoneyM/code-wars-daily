// Description:
// --------------------------------------
// The function giveMeFive accepts 1 parameter, obj, which is an object.

// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

// At the end, return your array.

// You should use for..in in your code, otherwise your solution may not pass this kata.


// Solution:
// --------------------------------------
function giveMeFive(obj){
    let result = [];

    for (key in obj){
        if (key.length === 5)
            result.push(key);
        if (obj[key].length === 5)
            result.push(obj[key]);
    }

    return result;
}

console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"})) //["earth", "world"]
console.log(giveMeFive({Pears:"than",apple:"sweet"})) //["Pears", "apple", "sweet"]