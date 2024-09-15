// Description:
// -------------------------------------- 
// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
// Examples (input --> output):

// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

// Don't forget to rate this kata! Thanks :)


// Solution:
// --------------------------------------
String.prototype.camelCase=function(){
    if(this == '')
        return ''
    return this.split(' ').map((e) => e[0].toUpperCase() + e.slice(1)).join('')
}

console.log('hello world'.camelCase())
console.log(''.camelCase())