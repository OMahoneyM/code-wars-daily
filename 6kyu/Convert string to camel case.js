// Description:
// --------------------------------------
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


// Solution:
// --------------------------------------
function toCamelCase(str){
    let result = ''

    for (let i = 0; i < str.length; i++){
        if (str[i] === '-' || str[i] === '_'){
            if ((str[i + 1].charCodeAt(0) >= 97) && (str[i + 1].charCodeAt(0) <= 122)){
                result += str[i + 1].toUpperCase()
                i++;
            } else {
                result += str[i + 1];
                i++;  
            }
        } else {
            result += str[i];
        }
    }

    return result;
};

console.log(toCamelCase("The_stealth-Warrior"))
console.log(toCamelCase("The_stealth-warrior"))


// RegEx Solution:
// --------------------------------------
function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}