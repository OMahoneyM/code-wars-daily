// Description:
// --------------------------------------
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

//     < firstName here >, < country here > of the first Python developer who has signed up; or
//     There will be no Python developers if no Python developer has signed up.

// For example, given the following input array:

var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];
var list2 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Java' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ];
var list3 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
  ];

// your function should return Victoria, Puerto Rico.

// Notes:

//     The input array will always be valid and formatted as in the example above.


// Solution:
// --------------------------------------
function getFirstPython(arr){

    return arr.find(e => e.language === "Python")
    // for(let i = 0; i < arr.length; i++){
    //     if (arr[i].language === "Python") {
    //         return `${arr[i].firstName}, ${arr[i].country}`
    //     }
    // }

    // return "There will be no Python developers"
}

console.log(getFirstPython(list1), "Victoria, Puerto Rico")
console.log(getFirstPython(list2), "There will be no Python developers")
console.log(getFirstPython(list3), "Victoria, Puerto Rico")



// Alt Solution:
// --------------------------------------
function getFirstPython(arr){
    const dev = arr.find(e => e.language === "Python")

    return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers"
}

console.log(getFirstPython(list1), "Victoria, Puerto Rico")
console.log(getFirstPython(list2), "There will be no Python developers")
console.log(getFirstPython(list3), "Victoria, Puerto Rico")