// Description:
// --------------------------------------
// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....

// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"] or ...

// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)

// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).
// Notes:

//     In the result codes and their values are in the same order as in M.
//     See "Samples Tests" for the return.


// Solution:
// --------------------------------------
function stockList(listOfArt, listOfCat){
    let result = "";
    let oosCheck = [];

    if (!listOfArt || !listOfCat)
        return result;

    for (let i = 0; i < listOfCat.length; i++){
        let quantity = 0;

        for (let j = 0; j < listOfArt.length; j++){
            if (listOfCat[i] === listOfArt[j][0]){
                quantity += Number(listOfArt[j].match(/\d+$/))
            }
        }

        if (quantity === 0){
            oosCheck.push('yes')
        } else {
            oosCheck.push('no')
        }

        if (i === 0){
            result += `(${listOfCat[i]} : ${quantity})`;
        } else {
            result += ` - (${listOfCat[i]} : ${quantity})`;
        }
    }

    if (oosCheck.every(e => e === 'yes')){
        return ""; 
    } else {
        return result;
    }
}

let b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
let c = ["A", "B", "C", "D", "W"]
console.log(stockList(b, c)) 
// "(A : 0) - (B : 1290) - (C : 515) - (D : 600) - (W : 0)"

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
console.log(stockList(b, c)) 
//"(A : 200) - (B : 1140)"

console.log(stockList("", "")) 
//""


// Alt Solution:
// --------------------------------------
function stockList(listOfArt, listOfCat) {
    if (!listOfArt || ! listOfCat) return '';

    return listOfCat.map(letter => {
        const quantity = listOfArt.reduce((a, c) => a + (c.charAt(0) === letter ? +c.split(' ')[1] : 0), 0)
        return `(${letter} : ${quantity})`;
    }).join(' - ');
}

b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B", "C", "D", "W"]
console.log(stockList(b, c)) 
// "(A : 0) - (B : 1290) - (C : 515) - (D : 600) - (W : 0)"