// Description:
// --------------------------------------
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


// Solution:
// --------------------------------------
function removeExclamationMarks(s) {
    return s.split('').map(item => item == '!' ? '' : item).join('')
}