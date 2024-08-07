// Description:
// --------------------------------------
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


// Solution:
// --------------------------------------
function well(x){
    if(!x.includes('good'))
        return 'Fail!'
    if(x.filter(e => e === 'good').length >= 3){
        return 'I smell a series!'
    } else {
        return 'Publish!'
    }
}

console.log(well(['bad','bad','bad']))
console.log(well(['good','bad','bad']))
console.log(well(['good','good','good','bad']))