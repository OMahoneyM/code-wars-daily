// Description:
// --------------------------------------
// Given a logarithm base X and two values A and B, return a sum of logratihms with the base X: log⁡XA+log⁡XB \log_XA + \log_XB logX​A+logX​B.


// Solution:
// --------------------------------------
function logs(x, a, b){
    return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x)
}

console.log(logs(10, 2, 3), 0.7781512503836435)


// Alt Solution:
// --------------------------------------
function logs(x, a, b){
    return Math.log(a * b) / Math.log(x)
}

console.log(logs(10, 2, 3), 0.7781512503836435)
