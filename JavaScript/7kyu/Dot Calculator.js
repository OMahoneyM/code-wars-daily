// Description:
// --------------------------------------
// Dot Calculator

// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

//     + Addition
//     - Subtraction
//     * Multiplication
//     // Integer Division

// Your Work (Task)

// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.
// Examples (Input => Output)

// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""


// Solution:
// --------------------------------------
function dotCalculator(equation) {
    let arr = equation.split(" ")

    if (arr[1] === "+"){
        return new Array(arr[0].length + arr[2].length).fill(".").join("")
    } else if (arr[1] === "-"){
        return new Array(arr[0].length - arr[2].length).fill(".").join("") 
    } else if (arr[1] === "*"){
        return new Array(arr[0].length * arr[2].length).fill(".").join("")
    } else if (arr[1] === "//"){
        return new Array(Math.floor(arr[0].length / arr[2].length)).fill(".").join("")
    }

    return arr
}

console.log(dotCalculator("..... + ..............."), "....................")
console.log(dotCalculator("... * .."), "......")
console.log(dotCalculator("..... // .."), "..")
console.log(dotCalculator(". // .."), "")
console.log(dotCalculator(".. - .."), "")


// Alt Solution:
// --------------------------------------
function dotCalculator(equation){
    let [a, op, b] = equation.split(" ")

    switch (op) {
        case "+":
            return '.'.repeat(a.length + b.length)
            break;
        case "-":
            return '.'.repeat(a.length - b.length)
            break;
        case "*":
            return '.'.repeat(a.length * b.length)
            break;
        case "//":
            return '.'.repeat(a.length / b.length)
    }
    
}

console.log(dotCalculator("..... + ..............."), "....................")
console.log(dotCalculator("... * .."), "......")
console.log(dotCalculator("..... // .."), "..")
console.log(dotCalculator(". // .."), "")
console.log(dotCalculator(".. - .."), "")
