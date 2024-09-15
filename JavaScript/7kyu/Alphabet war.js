// Description:
// --------------------------------------
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
// Task

// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

// The other letters don't have power and are only victims.
// Example

// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!


// Solution:
// --------------------------------------
function alphabetWar(fight){
    let count = 0;
    let arr = fight.split('');

    for (let el of arr){
        if (el === 'w') count -= 4
        if (el === 'p') count -= 3
        if (el === 'b') count -= 2
        if (el === 's') count -= 1
        if (el === 'm') count += 4
        if (el === 'q') count += 3
        if (el === 'd') count += 2
        if (el === 'z') count += 1
    }

    if (count > 0) return 'Right side wins!';
    if (count < 0) return 'Left side wins!';
    return "Let's fight again!";
}

console.log(alphabetWar("z"));        //=> Right side wins!
console.log(alphabetWar("zdqmwpbs")); //=> Let's fight again!
console.log(alphabetWar("zzzzs"));    //=> Right side wins!
console.log(alphabetWar("wwwwwwz"));  //=> Left side wins!


// Solution:
// --------------------------------------
function alphabetWar(fight) {
    let map = {w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1};
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}