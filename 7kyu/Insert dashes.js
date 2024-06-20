// Description:
// --------------------------------------
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).


// Solution:
// --------------------------------------
function insertDash(num){
    let str = num.toString()
    let result = ''

    for(let i = 0; i < str.length - 1; i++){
        result += str[i]
        if((str[i + 1] % 2 !== 0) && (str[i] % 2 !== 0)){
            result += '-'
        }
    }
    result += str[str.length - 1]
    return result
}

console.log(insertDash(454793)) //4547-9-3
console.log(insertDash(1003567)) //1003-567
