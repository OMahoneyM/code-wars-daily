// Description:
// --------------------------------------
// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
// Valid inputs examples:

// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89

// Invalid input examples:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// Notes:

//     Leading zeros (e.g. 01.02.03.04) are considered invalid
//     Inputs are guaranteed to be a single string


// Solution:
// --------------------------------------
function isValidIP(str) {
    arr = str.split('.')
    //split str and check if array length is >4 or < 4
    if (arr.length > 4 || arr.length < 4) return false

    //return arr
    //check if str is only digits
    //if (arr.includes(/\D/)) return false

    if (arr.some(e => e.length > 1 && e[0] === "0")) return false
    //iterate over array and check if element is >= 0 and <= 255
    return arr.every(e => +e >= 0 && +e <= 255 && !/\n/.test(e) && !/\s/.test(e) && !/[a-z]/.test(e) && e != "")
}

console.log(isValidIP("1.2.3.4.5"), false)
console.log(isValidIP("1.02.3.4"), false)
console.log(isValidIP("1.2.256.4"), false)
console.log(isValidIP("1.2.3.abc"), false)
console.log(isValidIP("1.2.3"), false)
console.log(isValidIP(""), false)
console.log(isValidIP("\n1.2.3.4"), false)
console.log(isValidIP("1e0.1e1.1e2.2e2"), false)
console.log(isValidIP("94.62 .188.4"), false)
console.log(isValidIP("94..188.4"), false)
console.log(isValidIP("1.2.3.4"), true)
console.log(isValidIP("192.168.1.1"), true)


// Alt Solution:
// --------------------------------------
function isValidIP(str) {
    let octets = str.split(".")
    return (octets.length === 4) &&
        octets.reduce((acc, octet) => 
            (acc === true) &&
            (String(+octet) === octet) &&
            (+octet >= 0) &&
            (+octet <= 255)
            , true)
}
console.log(isValidIP("1.2.3.4.5"), false)
console.log(isValidIP("1.02.3.4"), false)
console.log(isValidIP("1.2.256.4"), false)
console.log(isValidIP("1.2.3.abc"), false)
console.log(isValidIP("1.2.3"), false)
console.log(isValidIP(""), false)
console.log(isValidIP("\n1.2.3.4"), false)
console.log(isValidIP("1e0.1e1.1e2.2e2"), false)
console.log(isValidIP("94.62 .188.4"), false)
console.log(isValidIP("94..188.4"), false)
console.log(isValidIP("1.2.3.4"), true)
console.log(isValidIP("192.168.1.1"), true)
