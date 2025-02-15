// Description:
// --------------------------------------
// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!


// Solution:
// --------------------------------------
function nextId(ids){
    let unqIds = [...new Set(ids)].sort((a, b) => a - b)
    let lowestAvailId = unqIds.slice(-1).reduce((a, c) => a + +c, 1)

    if (unqIds[0] != 0){
        return 0
    }

    for (let i = 0; i < ids.length; i++){
        if (unqIds[i] + 1 < unqIds[i + 1]){
            lowestAvailId = unqIds[i] + 1
            break
        }
    }

    return lowestAvailId
}

console.log(nextId([0,1,2,4]), 3)
console.log(nextId([0,1,2,3]), 4)
console.log(nextId([1,0,2,2,5]), 3)


// Alt Solution:
// --------------------------------------
function nextId(ids){
    let x = 0
    while (ids.includes(x)){
        x++
    }
    return x
}

console.log(nextId([0,1,2,4]), 3)
console.log(nextId([0,1,2,3]), 4)
console.log(nextId([1,0,2,2,5]), 3)
console.log(nextId([1,2,2,5]), 0)

