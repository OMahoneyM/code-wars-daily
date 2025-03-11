// Description:
// --------------------------------------
// Introduction

// There is a war...between alphabets!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters called airstrike to help them in war - dashes and dots are spread throughout the battlefield. Who will win?
// Task

// Write a function that accepts a fight string which consists of only small letters and * which represents a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, and when the right side wins return Right side wins!. In other cases, return Let's fight again!.

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
// The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );
// Example (Input --> Output)

// "s*zz"           --> "Right side wins!"
// "*zd*qm*wp*bs*"  --> "Let's fight again!"
// "zzzz*s*"        --> "Right side wins!"
// "www*www****z"   --> "Left side wins!"


// Solution:
// --------------------------------------
function alphabetWar(fight){ 
    let dict = {
      'w':4,'p':3,'b':2,'s':1,'m':-4,'q':-3,'d':-2,'z':-1
    };
    const arr = [];
    const arr1 = fight.split('')
    
    for (let i = 0; i < fight.length; i++){
      if(arr1[i - 1] !== '*' && arr1[i] !== '*' && arr1[i + 1] !== '*'){
        arr.push(arr1[i])
      }
    }
    
    let sum = arr.reduce((a, b) => a + (dict[b] ? dict[b] : 0), 0)
    return sum < 0 ? 'Right side wins!' : sum > 0 ? 'Left side wins!' : 'Let\'s fight again!';
}

console.log(alphabetWar("z"), "Right side wins!")
console.log(alphabetWar("****"), "Let's fight again!")
console.log(alphabetWar("z*dq*mw*pb*s"), "Let's fight again!" )
console.log(alphabetWar("zdqmwpbs"), "Let's fight again!" )
console.log(alphabetWar("zz*zzs"), "Right side wins!")
console.log(alphabetWar("sz**z**zs"), "Left side wins!")
console.log(alphabetWar("z*z*z*zs"), "Left side wins!" )
console.log(alphabetWar("*wwwwww*z*"), "Left side wins!")
console.log(alphabetWar("s*zz"), "Right side wins!")
console.log(alphabetWar("*zd*qm*wp*bs*"), "Let's fight again!")
console.log(alphabetWar("zzzz*s"), "Right side wins!")
console.log(alphabetWar("www*www****z"), "Left side wins!")


// Solution That Should Work But Doesn't Because This Kata is Busted:
// --------------------------------------
function alphabetWar(fight){
    //left letters, power variables
    let leftLetters = "sbpw",
        leftPower = 0
    //right letters, power variables
    let rightLetters = "zdpm",
        rightPower = 0

    //split string by *
    //remove blank elements
    let battle = fight.split('*').filter(e => e != '').map((e, i, arr) => {
        //if first element, remove last char
        if (arr.length === 1){
            return e
        } else if (i === 0){
            return e.slice(0, e.length - 1)
        //if last element, remove first char
        } else if (i === arr.length - 1) {
            return e.slice(1)
        //else remove first and last chars
        } else {
            return e.slice(1, e.length - 1)
        }
    }).join('')
    
    //loop through battle and add letter index to power value
    for (let char of battle){
        if (leftLetters.indexOf(char) >= 0){
            leftPower += leftLetters.indexOf(char) + 1
        } else if (rightLetters.indexOf(char) >= 0){
            rightPower += rightLetters.indexOf(char) + 1
        }
    }
    
    //return if leftPower >, <, === rightPower
    return leftPower > rightPower ? "Left side wins!" : leftPower < rightPower ? "Right side wins!" : "Let's fight again!";
}