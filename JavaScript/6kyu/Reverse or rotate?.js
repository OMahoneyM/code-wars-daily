// Description:
// --------------------------------------
// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

//     sz is <= 0 or if str == "" return ""
//     sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

// Examples:

// ("123456987654", 6) --> "234561876549"
// ("123456987653", 6) --> "234561356789"
// ("66443875", 4) --> "44668753"
// ("66443875", 8) --> "64438756"
// ("664438769", 8) --> "67834466"
// ("123456779", 8) --> "23456771"
// ("", 8) --> ""
// ("123456779", 0) --> "" 
// ("563000655734469485", 4) --> "0365065073456944"

// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".


// Solution:
// --------------------------------------
function revrot(str, sz) {
    //declare result
    let result = "";
    //return blank for invalid inputs
    if (str.length === 0 || sz > str.length || sz <= 0) {
        return result;
      }
    //create loop to slice str in sz
    for (let i = 0; i < str.length; i += sz) {
        //set substring to slice of length sz
        let subStr = str.slice(i, i + sz)
        //sum the values of the substring
        let sum = subStr.split("").reduce((a, c) => a + +c, 0)
        //check is substr === sz
        if (subStr.length === sz){
            //if sum is divisible by 2 reverse substring
            if (+sum % 2 === 0) {
                result += subStr.split("").reverse().join("")
            //if not divisible by 2 shift left by one
            } else {
                result += subStr.slice(1) + subStr[0]
            }
        }
    }
    //return result
    return result;
}

console.log(revrot("", 4), "")
console.log(revrot("1234", 0), "")
console.log(revrot("123", 4), "")
console.log(revrot("66443875", 4), "44668753")
console.log(revrot("66443875", 8), "64438756")
console.log(revrot("733049910872815764", 5), "330479108928157")