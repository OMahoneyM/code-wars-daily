// Description:
// --------------------------------------
// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'


// Solution:
// --------------------------------------
function dashatize(num) {
    //set result as empty string variable
    let result = '';
    //convert number to string
    num = Math.abs(num).toString();

    if (num.length === 1){
        return num;
    } else {
        //loop over string
        for (let i = 0; i < num.length; i++){
            //if first element and is odd
            if (i === 0 && num[i] % 2 != 0){
                //concatenate to result 'element-'
                result += `${num[i]}-`
            }
            //else if last element and is odd
            else if (i === num.length - 1 && num[i] % 2 != 0){
                //concatenate to result '-element'
                result += `-${num[i]}`
            }
            //else if element is odd
            else if (num[i] % 2 != 0){
                //concatenate to result '-element-'
                result += `-${num[i]}-`
            }
            //else
            else {
                //concatenate to result 'element'
                result += num[i]
            }
        }
    }
    //return result
    result = result.replace(/--/g,'-');

    if (result[0] === '-'){
        return result.slice(1)
    } else {
        return result
    }
}

console.log(dashatize(274)) //'2-7-4'
console.log(dashatize(5311)) //'5-3-1-1'
console.log(dashatize(86320)) //'86-3-20'
console.log(dashatize(0)) //'0'
console.log(dashatize(-1)) //'1'
console.log(dashatize(-28369)) //'28-3-6-9'


// Alt Solution:
// --------------------------------------
function dashatize(num) {
    return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
};

console.log(dashatize(-28369)) //'28-3-6-9'

//The regex is matching either a single odd number or a group of even numbers and will return an array with all matches from the string.