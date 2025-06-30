// Description:
// --------------------------------------
// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"

// Notes:

//     the returned string should only contain lowercase letters


// Solution:
// --------------------------------------
function kebabize(str) {
    return str.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/\d/g, "").replace(/^-/, "")
}

console.log(kebabize("camelsHaveThreeHumps"), "camels-have-three-humps")
console.log(kebabize("camelsHave3Humps"), "camel-have-humps")
console.log(kebabize("CAMELS"), "c-a-m-e-l-s")


// Alt Solution:
// --------------------------------------
function kebabize(str) {
    return str.replace(/\d/g, "").split(/(?=[A-Z])/g).join("-").toLowerCase()
}

console.log(kebabize("camelsHaveThreeHumps"), "camels-have-three-humps")
console.log(kebabize("camelsHave3Humps"), "camel-have-humps")
console.log(kebabize("CAMELS"), "c-a-m-e-l-s")