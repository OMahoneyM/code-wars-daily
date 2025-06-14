// Description:
// --------------------------------------
// You need to write regex that will validate a password to make sure it meets the following criteria:

//     At least six characters long
//     contains a lowercase letter
//     contains an uppercase letter
//     contains a digit
//     only contains alphanumeric characters (note that '_' is not alphanumeric)


// Solution:
// --------------------------------------
const REGEXP = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{6,}$/;
//^ - matches the beginning of the string
//(?=.*[a-z]) - a positive lookahead that matches any character zero or more times, followed by a lowercase letter. This ensures that the password contains at least one lowercase letter.
//(?=.*[A-Z]) - a positive lookahead that matches any character zero or more times, followed by an uppercase letter. This ensures that the password contains at least one uppercase letter.
//(?=.*\d) - a positive lookahead that matches any character zero or more times, followed by a digit. This ensures that the password contains at least one digit.
//[a-zA-Z\d]{6,} - matches any alphanumeric character (excluding '_') six or more times. This ensures that the password is at least six characters long and only contains alphanumeric characters.
//$ - matches the end of the string.

console.log(REGEXP.test("fjd3IR9"), true)
console.log(REGEXP.test("ghdfj32"), false)