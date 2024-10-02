// Description:
// --------------------------------------
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

// Examples

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


// Solution:
// --------------------------------------
function generateHashtag (str) {
    //test if string is empty or string is > 140 characters
            //return false
    if (str.replace(/\s/g, "").length < 1) return false;

    //turn string into array
        //filter element length != 0
        //loop over element and capitalize first letter
        //reduce array
        //return value
    str = str.trim().split(" ").filter(el => el.length != 0).map(el => el = el[0].toUpperCase() + el.slice(1)).reduce((acc, cur) => acc + cur, "#");

    return str.length <= 140 ? str : false;

}

console.log(generateHashtag("")) //false
console.log(generateHashtag(" ")) //false
console.log(generateHashtag("   Hello    World   ")) //#HelloWorld
console.log(generateHashtag(" Hello there thanks for trying my Kata")) //#HelloThereThanksForTryingMyKata
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")) //false
console.log(generateHashtag("a".repeat(140))) //false


// Alt Solution:
// --------------------------------------
function generateHashtag(str) {
    let hastag = str.split(' ').reduce((acc, cur) => acc + cur.charAt(0).toUpperCase() + cur.slice(1), "#");

    return hastag.length === 1 || hastag.length > 140 ? false : hastag;
}
console.log(generateHashtag("")) //false
console.log(generateHashtag(" ")) //false
console.log(generateHashtag("   Hello    World   ")) //#HelloWorld
console.log(generateHashtag("a".repeat(140))) //false