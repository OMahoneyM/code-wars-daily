// Description:
// --------------------------------------
// Jumping number is the number that All adjacent digits in it differ by 1.
// Task

// Given a number, Find if it is Jumping or not . 

// Notes

//     Number passed is always Positive .

//     Return the result as String .

//     The difference between ‘9’ and ‘0’ is not considered as 1 .

//     All single digit numbers are considered as Jumping numbers. 


// Alt Solution:
// --------------------------------------
function jumpingNumber(n){
    let arr = String(n).split('')
    for(let i = 0; i < arr.length - 1; i++){
      if(Math.abs(arr[i] - arr[i + 1]) !== 1 ){
        return 'Not!!'
      }
    }
    return 'Jumping!!'
}


// Alt Solution:
// --------------------------------------
function jumpingNumber(n){
    return [...n + ''].every((e, i, a) => !i || Math.abs(e - a[i - 1]) === 1) ? 'Jumping!!' : 'Not!!';
}

console.log(jumpingNumber(1)) //Jumping!!
console.log(jumpingNumber(47)) //Not!!