// Description:
// --------------------------------------
// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]

// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.


// Solution:
// --------------------------------------
function solve(arr) {
    //declare array variable
    let result = [];
    //loop through input array
    arr.forEach(word => {
        //declare counter variable
        let counter = 0;
        //loop through each word
        for (let i = 0; i < word.length; i++) {
            //transform to lowercase
            //test if letter ASCII code === idx + 1
            if ((word[i].toLowerCase().charCodeAt() - 96) === i + 1) {
                //counter++
                counter++;
            }
        }
        //push counter to result array
        result.push(counter);
    })
    //return result
    return result
}

console.log(solve(['abode', 'ABc', 'xyzD']), [4, 3, 1]) 