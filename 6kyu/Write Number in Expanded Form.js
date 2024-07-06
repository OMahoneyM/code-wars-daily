// Description:
// --------------------------------------
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!


// Solution:
// --------------------------------------
function expandedForm(num){
    let result = []
    String(num).split('').reverse().forEach((e, i) => {
        if (e === '0'){
            result = result
        } else {
            result.unshift(e * 10 ** i)
        }
    })
    return result.join(' + ')

}

console.log(expandedForm(42))
console.log(expandedForm(70304))


// Alt Solution:
// --------------------------------------
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map((e, i) => e * Math.pow(10, i))
                            .filter(e => e > 0)
                            .reverse()
                            .join(" + ");