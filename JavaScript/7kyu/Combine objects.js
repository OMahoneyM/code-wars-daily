// Description:
// --------------------------------------
// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

// The combine function should be a good citizen, so should not mutate the input objects.


// Solution:
// --------------------------------------
objA = {a: 10, b: 20, c:30};
objB = {a: 3, c: 6, d: 3};

function combine() {
  let result = {};
  let args = [...arguments];
  let keys = [];

  for (let i = 0; i < args.length; i++){
    keys.push((Object.keys(args[i])));
  }
  
  keys = [... new Set (keys.flat())];
  
  for (let i = 0; i < args.length; i++){
    for (let j = 0; j < keys.length; j++){
      result[result[keys[j]] ? result[keys[j]] += (args[i][keys[j]] || 0) : result[keys[j]] = args[i][keys[j]]];
    }
  }

  return result;
}

console.log(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 })


// Alt Solution:
// --------------------------------------
function combine() {
  let result = {};

  for (let i = 0; i < arguments.length; i++){
    for (let key in arguments[i]){
      result[key] = result[key] ? result[key] + arguments[i][key] : arguments[i][key]
    }
  }
  return result
}

console.log(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 })
