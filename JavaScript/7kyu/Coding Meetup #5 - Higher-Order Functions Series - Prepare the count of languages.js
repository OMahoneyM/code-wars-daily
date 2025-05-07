// Description:
// --------------------------------------
// You will be given an array of objects (associative arrays in PHP, table in COBOL, dictionaries in Python) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP, table in COBOL, dictionary in Python) which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

var list2 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
    { firstName: 'Terry', lastName: 'J.', country: 'England', continent: 'Europe', age: 47, language: 'Ruby' },
  ];

// your function should return the following object (associative array in PHP, table in COBOL):

// { C: 2, JavaScript: 1, Ruby: 1 }

// Notes:

//     The order of the languages in the object does not matter.
//     The count value should be a valid number.
//     The input array will always be valid and formatted as in the example above.
  
  
// Solution:
// --------------------------------------
function countLanguages(arr){
    let langCount = {};

    for (let person of arr) {
        langCount[person.language] ? langCount[person.language]++ : langCount[person.language] = 1;
    }

    return langCount;
}

console.log(countLanguages(list1), { C: 2, JavaScript: 1, Ruby: 1 })
console.log(countLanguages(list2), { C: 2, JavaScript: 1, Ruby: 2 })

  
// Alt Solution:
// --------------------------------------
function countLanguages(arr){
    return arr.reduce((a, c) => {
        a[c.language] ? a[c.language]++ : a[c.language] = 1
        return a
    }, {})
}

console.log(countLanguages(list1), { C: 2, JavaScript: 1, Ruby: 1 })
console.log(countLanguages(list2), { C: 2, JavaScript: 1, Ruby: 2 })