// Description:
// --------------------------------------
// You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

// Return:

//     0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
//     1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
//     n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")

// Examples

// "1 2 3 4"  ==>  return 0, because the sequence is complete

// "1 2 4 3"  ==>  return 0, because the sequence is complete (order doesn't matter)

// "2 1 3 a"  ==>  return 1, because it contains a non numerical character

// "1 3 2 5"  ==>  return 4, because 4 is missing from the sequence

// "1 5"      ==>  return 2, because the sequence is missing 2, 3, 4 and 2 is the lowest


// Solution:
// --------------------------------------
function findMissingNumber(seq){
    if (seq === "") { return 0 }
    if (/[a-z]/i.test(seq)) { return 1 };

    let sortedSeq = seq.split(' ').sort((a, b) => a - b);

    if (sortedSeq.length === 1 && sortedSeq[0] != 1) { return 1 }

    for (let i = 0; i < sortedSeq.length - 1; i++) {
        if (+sortedSeq[i] + 1 != +sortedSeq[i + 1]) {
            return +sortedSeq[i] + 1
        }
    }

    return 0
}

console.log(findMissingNumber("1 2 3 4"), 0)
console.log(findMissingNumber("1 2 4 3"), 0)
console.log(findMissingNumber("1 2 a 4"), 1)
console.log(findMissingNumber("1 4"), 2)
console.log(findMissingNumber("1 2 3 5"), 4)
console.log(findMissingNumber("2"), 1)
console.log(findMissingNumber(""), 0)


// Alt Solution:
// --------------------------------------
function findMissingNumber(seq){
    if (!Number.isInteger(+seq.split(" ").join(""))) { return 1 }

    let arr = seq.split(" ").map(e => +e)

    for (let i = 1; i < Math.max(...arr); i++){
        if (!arr.includes(i)) { return i }
    }

    return 0
}

console.log(findMissingNumber("1 2 3 4"), 0)
console.log(findMissingNumber("1 2 4 3"), 0)
console.log(findMissingNumber("1 2 a 4"), 1)
console.log(findMissingNumber("1 4"), 2)
console.log(findMissingNumber("1 2 3 5"), 4)
console.log(findMissingNumber("2"), 1)
console.log(findMissingNumber(""), 0)
