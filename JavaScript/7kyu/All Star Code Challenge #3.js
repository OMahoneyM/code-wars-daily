// Description:
// --------------------------------------
// This Kata is intended as a small challenge for my students

// Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

// Example (Input --> Output)

// "drake" --> "drk"
// "aeiou" --> ""

// remove_vowels("drake") // => "drk"
// remove_vowels("aeiou") // => ""


// Solution:
// --------------------------------------
const removeVowels = s => s.replace(/[aeiou]/g, "");

console.log(removeVowels("taco"), "tc")
console.log(removeVowels("aeiou"), "")