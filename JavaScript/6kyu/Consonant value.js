// Description:
// --------------------------------------
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia c"

// "zodiac" -> 26

// The consonant substrings are: "z", "d" and "c" with values "z" = 26, "d" = 4 and "c" = 3. The highest is 26.

// "strength" -> 57

// The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

// For C: do not mutate input.

// More examples in test cases. Good luck!


// Solution:
// --------------------------------------
function solve(str){
    let alphabet = ' abcdefghijklmnopqrstuvwxyz'
    return str.split(/[aeiou]+/).map(e => {
        let count = 0
        for(let letter of e){
            count += alphabet.indexOf(letter)
        }
        return count
    }).reduce((acc, cur) => acc > cur ? acc : cur, 0)
}

console.log(solve("zodiac"), 26)
console.log(solve("strength"), 57)