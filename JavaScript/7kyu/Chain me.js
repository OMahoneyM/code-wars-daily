// Description:
// --------------------------------------
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// // returns 90;
function add(x) {
	return x + 10;	
}

function mult(x) {
	return x * 30;
}


// Solution:
// --------------------------------------
function chain(input, fs){
    let output = input;
    
    for (let fun of fs){
        output = fun(output)
    }

    return output
}
console.log(chain(2, [add, mult]), 360)


// Alt Solution:
// --------------------------------------
function chain(input, fs){
    return fs.reduce((acc, fn) => fn(acc), input)
}
console.log(chain(2, [add, mult]), 360)
