// Description:
// --------------------------------------
// Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

// Usage example:

// full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
//     ---> should return 2 since "bb" shows up twice


// full_text = "aaabbbcccc", search_text = "bbb"
//     ---> should return 1


// Solution:
// --------------------------------------
function solution(fullText, searchText) {
    let regExMatch = new RegExp(searchText, "g")
    return (fullText.match(regExMatch) || []).length
}

console.log(solution("abcd", "e"), 0)
console.log(solution("abbbcd", "bb"), 1)
console.log(solution("abbcdbb", "bb"), 2)


// Alt Solution:
// --------------------------------------
function solution(fullText, searchText) {
    return fullText.split(searchText).length - 1
}

console.log(solution("abcd", "e"), 0)
console.log(solution("abbbcd", "bb"), 1)
console.log(solution("abbcdbb", "bb"), 2)
