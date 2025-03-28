// Description:
// --------------------------------------
// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

//     If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

//     If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

//     If the total of both even and odd numbers are identical return: "Even and Odd are the same"


// Solution:
// --------------------------------------
function evenOrOdd(str) {
    let even = str.split('').filter(e => e % 2 === 0).reduce((a, c) => a + +c, 0)
    let odd = str.split('').filter(e => e % 2 === 1).reduce((a, c) => a + +c, 0)

    return even > odd ? "Even is greater than Odd" : even < odd ? "Odd is greater than Even" : "Even and Odd are the same";
}

console.log(evenOrOdd('12345'), "Odd is greater than Even")
console.log(evenOrOdd('1234'), "Even is greater than Odd")
console.log(evenOrOdd('134'), "Even and Odd are the same")