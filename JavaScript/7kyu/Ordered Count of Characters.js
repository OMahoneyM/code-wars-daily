// Description:
// --------------------------------------
// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]


// Solution:
// --------------------------------------
var orderedCount = function (text) 
{
  var arr=[];
  for (var i=0; i<text.length; ++i)
  {
     var k=0;
     for (var j=0; j<arr.length; ++j)
        if (arr[j][0]==text[i])
            k++;
      if (k==0)
      {
        for (var j=i; j<text.length; ++j)
          if (text[j]==text[i])
             k++;
          arr.push([text[i],k]);
       }
  }
  return arr;

}

console.log(orderedCount('abracadabra')) 
//[['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
console.log(orderedCount('')) 
//[]
console.log(orderedCount('233312')) 
//[['2', 2], ['3', 3], ['1', 1 ]]


// Alt Solution:
// --------------------------------------
const orderedCount = s =>
    Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));
