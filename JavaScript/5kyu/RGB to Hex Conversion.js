// Description:
// --------------------------------------
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// Examples (input --> output):

// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"


// Solution:
// --------------------------------------
function toHex(num){
    let hex

    if (num < 0) {
        num = 0
        hex = num.toString(16)
    } else if (num > 255) {
        num = 255
        hex = num.toString(16).toUpperCase()
    } else {
        hex = num.toString(16).toUpperCase()
    }

    return hex.length < 2 ? "0" + hex : hex;
}

function rgb(r, g, b){
    return toHex(r) + toHex(g) + toHex(b)
}
console.log(rgb(255, 255, 255), "FFFFFF")
console.log(rgb(255, 300, 255), "FFFFFF")
console.log(rgb(0, 0, -2), "000000")
console.log(rgb(214, 13, 118), "D60D76")


// Alt Solution:
// --------------------------------------
function toHex(n){
    if (n < 0) { return "00" }
    if (n > 255) { return "FF" }
    return ("0" + (+n).toString(16)).slice(-2).toUpperCase()
}

function rgb(r, g, b){
    return toHex(r) + toHex(g) + toHex(b)
}

console.log(rgb(255, 255, 255), "FFFFFF")
console.log(rgb(255, 300, 255), "FFFFFF")
console.log(rgb(0, 0, -2), "000000")
console.log(rgb(214, 13, 118), "D60D76")