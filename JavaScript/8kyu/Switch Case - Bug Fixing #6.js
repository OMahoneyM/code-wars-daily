// Description:
// --------------------------------------
// Switch/Case - Bug Fixing #6

// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?


// Solution:
// --------------------------------------
function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': 
        result = value.a + value.b;
        break
      case'-': 
        result = value.a - value.b;
        break
      case'/': 
        result = value.a / value.b;
        break
      case'*': 
        result = value.a * value.b;
        break
      case'%': 
        result = value.a % value.b;
        break
      case'^': 
        result = Math.pow(value.a, value.b);
        break
    }
    return result;
}

console.log(evalObject({a:1,b:1,operation:'+'}), 2)
console.log(evalObject({a:2,b:1,operation:'-'}), 1)