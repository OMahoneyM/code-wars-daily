// Description:
// --------------------------------------
// Write a function capitalize() which capitalizes the first letter (if any) of the given string. For example:
// Input 	Output
// string 	String
// hello World 	Hello World
// i love codewars 	I love codewars
// This sentence is already capitalized 	This sentence is already capitalized
// 0123the first character of this sentence is not a letter 	0123the first character of this sentence is not a letter

// JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain.

// Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata.


// Solution:
// --------------------------------------
String.prototype.capitalize = function(){
    let firstChar = this.slice(0,1);
    let firstCharCode = firstChar.charCodeAt();
    let restOfWord = this.slice(1);

    if(firstCharCode >= 97 && firstCharCode <= 122){
        firstChar = String.fromCharCode(firstCharCode - 32)
    }
    return firstChar + restOfWord
}

console.log('hello world'.capitalize())


// Alt Solution:
// --------------------------------------
String.prototype.capitalize = function() {
    let c = str.charCodeAt(0)
    if (c >= 97 && c <= 122)
        c-= 32

    return String.fromCharCode(c) + str.slice(1)
}

console.log('hello world'.capitalize())