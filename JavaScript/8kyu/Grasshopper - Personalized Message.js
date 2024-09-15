// Description:
// --------------------------------------
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case 	return
// name equals owner 	'Hello boss'
// otherwise 	'Hello guest'

// Solution:
// --------------------------------------
const greet = (name, owner) => owner === name ? "Hello boss" : 'Hello guest';