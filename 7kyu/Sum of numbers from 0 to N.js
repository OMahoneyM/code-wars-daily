// Description:
// --------------------------------------
// We want to generate a function that computes the series starting from 0 and ending until the given number.


// Solution:
// --------------------------------------
function SequenceSum(n) {
    let result = [];
    for (let i = 0; i <= n; i++){
        result.push(i)
    }

    if(count<0) return `${count}<0`;
    if(count==0) return `${count}=0`;
    return `${result.join('+')} = ${result.reduce((a,c) => a + c, 0)}`;

}

console.log(SequenceSum(6))

// Note: This is a horribly presented question.