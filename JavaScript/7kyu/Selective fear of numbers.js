// Description:
// --------------------------------------
// I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

// Monday --> 12

// Tuesday --> numbers greater than 95

// Wednesday --> 34

// Thursday --> 0

// Friday --> numbers divisible by 2

// Saturday --> 56

// Sunday --> 666 or -666

// Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)


// Solution:
// --------------------------------------
const amIAfraid = (day, num) => {
    if ((day === 'Monday' && num === 12) ||
        (day === 'Tuesday' && num > 95) ||
        (day === 'Wednesday' && num === 34) ||
        (day === 'Thursday' && num === 0) ||
        (day === 'Friday' && num % 2 === 0) ||
        (day === 'Saturday' && num === 56) ||
        (day === 'Sunday' && Math.abs(num) === 666)) {
            return true;
        }
    return false;
}

console.log(amIAfraid("Monday", 12), true)
console.log(amIAfraid("Tuesday", 94), false)
console.log(amIAfraid("Wednesday", 34), true)
console.log(amIAfraid("Thursday", 0), true)
console.log(amIAfraid("Saturday", 55), false)
console.log(amIAfraid("Friday", 12), true)
console.log(amIAfraid("Sunday", -666), true)


// Alt Solution:
// --------------------------------------
function amIAfraid(day, num) {
    const fear = {
        'Monday': num === 12,
        'Tuesday': num > 95,
        'Wednesday': num === 34,
        'Thursday': num === 0,
        'Friday': num % 2 === 0,
        'Saturday': num === 56,
        'Sunday': Math.abs(num) === 666
    };
    return fear[day];
}

console.log(amIAfraid("Monday", 12), true)
console.log(amIAfraid("Tuesday", 94), false)
console.log(amIAfraid("Wednesday", 34), true)
console.log(amIAfraid("Thursday", 0), true)
console.log(amIAfraid("Saturday", 55), false)
console.log(amIAfraid("Friday", 12), true)
console.log(amIAfraid("Sunday", -666), true)