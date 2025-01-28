// Description:
// --------------------------------------
// Coding in function fiveLine, function accept 1 parameter:s. s is a string.

// Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

// Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

// Note2: Using a string template can make your job easier.


// Solution:
// --------------------------------------
function fiveLine(s){
    s = s.trim()
    let result = ''
    for(let i = 1; i <= 5; i++){
      result += s.repeat(i) + '\n'
    }
    return result.trim()
    
}

console.log(fiveLine("  a"), "a\naa\naaa\naaaa\naaaaa")
console.log(fiveLine("\txy \n"), "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy")


// Alt Solution:
// --------------------------------------
function fiveLine(s){
    s = s.trim()
    return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`    
}

console.log(fiveLine("  a"), "a\naa\naaa\naaaa\naaaaa")
console.log(fiveLine("\txy \n"), "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy")