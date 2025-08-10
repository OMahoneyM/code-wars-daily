// Description:
// --------------------------------------
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand
//     Division should be integer division. For example, this should return 2, not 2.666666...:

// eight(dividedBy(three()));


// Solution:
// --------------------------------------
const zero = fun => fun ? fun(0) : 0;
const one = fun => fun ? fun(1) : 1
const two = fun => fun ? fun(2) : 2
const three = fun => fun ? fun(3) : 3
const four = fun => fun ? fun(4) : 4
const five = fun => fun ? fun(5) : 5
const six = fun => fun ? fun(6) : 6
const seven = fun => fun ? fun(7) : 7
const eight = fun => fun ? fun(8) : 8
const nine = fun => fun ? fun(9) : 9

function plus(num){
    return input => input + num
}

function minus(num){
    return input => input - num

}
function times(num){
    return input => input * num

}
function dividedBy(num){
    return input => Math.floor(input / num)
}

console.log(seven(times(five())), 35)
console.log(four(plus(nine())), 13)
console.log(eight(minus(three())), 5)
console.log(six(dividedBy(two())), 3)


// Alt Solution:
// --------------------------------------
const number = number => func => func ? func(number) : number;

const zero = number(0)
const one = number(1)
const two = number(2)
const three = number(3)
const four = number(4)
const five = number(5)
const six = number(6)
const seven = number(7)
const eight = number(8)
const nine = number(9)

const plus = a => b => a + b
const minus = a => b => b - a
const times = a => b => a * b
const dividedBy = a => b => Math.floor(b / a)

console.log(seven(times(five())), 35)
console.log(four(plus(nine())), 13)
console.log(eight(minus(three())), 5)
console.log(six(dividedBy(two())), 3)
