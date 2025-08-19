// Description:
// --------------------------------------
// A person's full name is usually composed of a first name, middle name and last name; however in some cultures (for example in South India) there may be more than one middle name.

// Write a function that takes the full name of a person, and returns the initials, separated by dots ('.'). The initials must be uppercase. The last name of the person must appear in full, with its first letter in uppercase as well.

// See the pattern below:

// "code wars"            ---> "C.Wars"
// "Barack hussein obama" ---> "B.H.Obama"

// Names in the full name are separated by exactly one space (' ' ) ; without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.


// Solution:
// --------------------------------------
function initials(n){
    return n.split(" ")
            .map((e, i, arr) => (arr.length - 1 === i) ? e[0].toUpperCase() + e.slice(1) : e[0].toUpperCase() + ".")
            .join("")
}

console.log(initials("code wars"), "C.Wars")
console.log(initials("Barack hussein obama"), "B.H.Obama")


// Alt Solution:
// --------------------------------------
function initials(n){
    return n.split(" ")
            .map((e, i, arr) => e[0].toUpperCase() + ((arr.length - 1 === i) ? e.slice(1) : "."))
            .join("")
}

console.log(initials("code wars"), "C.Wars")
console.log(initials("Barack hussein obama"), "B.H.Obama")