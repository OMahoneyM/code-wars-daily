// Description:
// --------------------------------------
// Write a function that takes two arguments: an array and a callback function (in Ruby: a block).

// The function should return true if the callback / block returns false for all of the items in the array, or if the array is empty; otherwise return false.


// Solution:
// --------------------------------------
function none(arr, fun) {
    return (arr.some(e => fun(e))) ? false : true;
}

console.log(none([1,2,3,4,5], function(item){return item > 5}), true)
console.log(none([1,2,3,4,5], function(item){return item > 4}), false)
console.log(none([], function(item){return item > 5}), true)


// Alt Solution:
// --------------------------------------
function none(arr, fun) {
    return !arr.some(fun);
}

console.log(none([1,2,3,4,5], function(item){return item > 5}), true)
console.log(none([1,2,3,4,5], function(item){return item > 4}), false)
console.log(none([], function(item){return item > 5}), true)
