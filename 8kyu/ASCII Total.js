// Description:
// --------------------------------------
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291


// Solution:
// --------------------------------------
function uniTotal (string) {
    let total = 0;
    for (l of string) {
      total += l.charCodeAt();
    }
    return total;
}

console.log(uniTotal('a')) //97