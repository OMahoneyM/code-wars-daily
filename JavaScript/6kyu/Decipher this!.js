// Description:
// --------------------------------------
// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

//     the second and the last letter is switched (e.g. Hello becomes Holle)
//     the first letter is replaced by its character code (e.g. H becomes 72)

//     there are no special characters used, only letters and spaces
//     words are separated by a single space
//     there are no leading or trailing spaces

// Examples

// '72olle 103doo 100ya' --> 'Hello good day'
// '82yade 115te 103o'   --> 'Ready set go'


// Solution:
// --------------------------------------
function decipherThis(str) {
    //split into array
    let strArr = str.split(" ")
    //declare result variable
    let result = []
    //loop through array
    for (let e of strArr) {
        let word = ""
        //parseInt
        //fromCharCode() and push to result
        word += String.fromCharCode(parseInt(e))
        //replace number with nothing
        e = e.replace(/[0-9]/g, "")
        //loop through the element
        for (let i = 0; i < e.length; i++){
            //if i === 0
            if (i === 0){ word += e[e.length - 1] }
                //push last element to result
            else if (i > 0 && i < e.length - 1) {
                word += e[i]
            }
            //if i === e.length
            else if (i === e.length - 1) { word += e[0] }
                //push first element to result
        }
        result.push(word)
    }
    //return joined result
    return result.join(" ")  
}

console.log(decipherThis("72olle 103doo 100ya"), "Hello good day")
console.log(decipherThis("82yade 115te 103o"), "Ready set go")


// Alt Solution:
// --------------------------------------
function decipherThis(str){
    return str.split(" ")
              .map(e => e.replace(/^\d+/, c => String.fromCharCode(c)).replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2"))
              .join(" ")
}
console.log(decipherThis("72olle 103doo 100ya"), "Hello good day")
console.log(decipherThis("82yade 115te 103o"), "Ready set go")