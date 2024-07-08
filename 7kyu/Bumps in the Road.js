// Description:
// --------------------------------------
// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead


// Solution:
// --------------------------------------
function bump(x){
    if(x.split('').filter(e => e === 'n').length > 15) {
        return 'Car Dead';
    } else {
        return 'Woohoo!';
    }
}

console.log(bump('____nn__'))
console.log(bump('_nn_n_nn___nn___nn__n__n____nnnn___'))


// Alt Solution:
// --------------------------------------
const bump = x => x.split('').filter(e => e === 'n').length > 15 ? 'Car Dead' : 'Whoohoo!';