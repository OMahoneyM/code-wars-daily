// Description:
// --------------------------------------
// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).
// Examples

// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'


// Solution:
// --------------------------------------
function initializeNames(name){
    name = name.split(' ')
    if (name.length > 2) {
        for (let i = 1; i < name.length - 1; i++) {
            name[i] = name[i].replace(/^(\w).*/, "$1.")
        }
    }

    return name.join(' ')
}

console.log(initializeNames('Jack Ryan'), 'Jack Ryan')
console.log(initializeNames('Jack'), 'Jack')
console.log(initializeNames('Jack Carter Ryan'), 'Jack C. Ryan')
console.log(initializeNames('Jack Carter Mayne Ryan'), 'Jack C. M. Ryan')