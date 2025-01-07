// Description:
// --------------------------------------
// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']


// Solution:
// --------------------------------------
function spacey(arr) {
    let result = [];

    for(let i = 1; i <= arr.length; i++){
        result.push(arr.slice(0, i).join(""))
    }

    return result;
}

console.log(spacey(["i", "have", "no", "space"]), ['i','ihave','ihaveno','ihavenospace'])


// Alt Solution:
// --------------------------------------
function spacey(arr) {
    let str = '';
    return arr.map(e => str += e);
}

console.log(spacey(["i", "have", "no", "space"]), ['i','ihave','ihaveno','ihavenospace'])
