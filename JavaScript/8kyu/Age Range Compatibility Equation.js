// Description:
// --------------------------------------
// Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.

//     Min=Age2+7\text{Min} = \dfrac{ \text{Age} } {2} + 7Min=2Age​+7

//     Max=2⋅(Age - 7)\text{Max} = 2 \cdot (\text{Age - 7})Max=2⋅(Age - 7)

//     Minimum age≤Your age≤Maximum age\text{Minimum age} \le \text{Your age} \le \text{Maximum age}Minimum age≤Your age≤Maximum age

// Task

// Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

// This equation doesn't work when the age <= 14, so if the age <= 14, use this equation instead:

// min = age - 0.10 * age
// max = age + 0.10 * age

// You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form "[min]-[max]"
// Examples:

// age = 27   =>   "20-40"
// age = 5    =>   "4-5"
// age = 17   =>   "15-20"


// Solution:
// --------------------------------------
function datingRange(age){
    let min,
    max
    if (age <= 14){
        min = age - 0.1 * age
        max = age + 0.1 * age
    } else {
        min = 0.5 * age + 7
        max = 2 * (age - 7)
    }

    return `${Math.floor(min)}-${Math.floor(max)}`
}

console.log(datingRange(27), "20-40")
console.log(datingRange(17), "15-20")
console.log(datingRange(5), "4-5")