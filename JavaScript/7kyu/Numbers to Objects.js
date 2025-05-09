// Description:
// --------------------------------------
// You will be given an array of numbers.

// For each number in the array you will need to create an object.

// The object key will be the number, as a string. The value will be the corresponding character code, as a string.

// Return an array of the resulting objects.

// All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.


// Solution:
// --------------------------------------
function numObj(s){
    return s.map(e => { 
        let obj = {}
        obj[e] = String.fromCharCode(e)
        return obj
    })
}

console.log(numObj([118,117,120]),[{'118':'v'}, {'117':'u'}, {'120':'x'}])


// Alt Solution:
// --------------------------------------
function numObj(s){
    return s.map(e => ({ [e]: String.fromCharCode(e) }))
}

console.log(numObj([118,117,120]),[{'118':'v'}, {'117':'u'}, {'120':'x'}])