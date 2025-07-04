// Description:
// --------------------------------------
// Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

// Python, Javascript, Java, Ruby versions: return results in a list/array

// NOTICE:

//     Do NOT worry about checking zeros or negative values.
//     To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation


// Solution:
// --------------------------------------
function multiples(s1, s2, s3){
    let result = []

    for (let i = 1; i < s3; i++){
        if (!(i % s1) && !(i % s2))
            result.push(i)
    }

    return result
}

console.log(multiples(2, 4, 40), [4,8,12,16,20,24,28,32,36])


// Alt Solution:
// --------------------------------------
function multiples(s1, s2, s3){
    let result = []

    for (let i = s1; i < s3; i += s1){
        if (!(i % s2))
            result.push(i)
    }

    return result
}

console.log(multiples(2, 4, 40), [4,8,12,16,20,24,28,32,36])