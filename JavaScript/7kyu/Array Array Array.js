// Description:
// --------------------------------------
// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3]  you should return [['a', 3], ['a', 3], ['a', 3]].


// Solution:
// --------------------------------------
function explode(x){
  let count = 0
  if (x.every(e => typeof e === "number")) {
    count = x.reduce((a, c) => a + c, 0);
    return new Array(count).fill(x)
  }
  if (x.some(e => typeof e === "number")) {
    count = +x.filter(e => typeof e === "number").join("")
    return new Array(count).fill(x)
  }

  return "Void!"
}

console.log(explode([1, 3]), [[1,3], [1,3], [1,3], [1,3]])
console.log(explode(["c", 3]), [["c",3], ["c",3], ["c",3]])
console.log(explode(["c", "b"]), "Void")