// Description:
// --------------------------------------
// Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.
// Examples

// last(5)               ==> 5
// last([1, 2, 3, 4])    ==>  4
// last("xyz")           ==> "z"
// last(1, 2, 3, 4)      ==>  4
// last([1, 2], [3, 4])  ==>  [3, 4]
// last([[1, 2], [3, 4]])  ==>  [3, 4]


// Solution:
// --------------------------------------
function last(list){
    let lastArg = arguments[arguments.length - 1]
    let lastEl = list[list.length - 1]
    return arguments.length > 1 ? lastArg : lastEl || lastArg
}

console.log(last(5), 5)
console.log(last([1, 2, 3, 4]),4)
console.log(last("xyz"),"z")
console.log(last(1, 2, 3, 4), 4)
console.log(last([1, 2], [3, 4]),   [3, 4])
console.log(last([[1, 2], [3, 4]]),  [3, 4])


// Alt Solution:
// --------------------------------------
function last(list) {
  if (arguments.length > 1) {
    return arguments[arguments.length - 1];
  }
  if (Array.isArray(list)) {
    return list.pop();
  } else if (typeof list == 'string') {
    return list.charAt(list.length - 1)
  } else {
    return list;
  }
}