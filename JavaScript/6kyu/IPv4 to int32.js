// Description:
// --------------------------------------
// Take the following IPv4 address: 128.32.10.1. This address has 4 octets where each octet is a single byte (or 8 bits).

//     1st octet 128 has the binary representation: 10000000
//     2nd octet 32 has the binary representation: 00100000
//     3rd octet 10 has the binary representation: 00001010
//     4th octet 1 has the binary representation: 00000001

// So 128.32.10.1 == 10000000.00100000.00001010.00000001

// Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

// Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.
// Example

// "128.32.10.1" => 2149583361


// Solution:
// --------------------------------------
function ip_to_int32(ip) {
    //split the string
    //map each number toString(2)
    //join
    //wrap it all in Number()
    return parseInt(ip.split(".").map(e => {
        let bit = Number(e).toString(2)
        while (bit.length < 8) {
            bit = "0" + bit;
        }
        return bit
    }).join(""), 2)
}
console.log(ip_to_int32("128.32.10.1"), 2149583361)


// Alt Solution:
// --------------------------------------
function ip_to_int32(ip){
    return ip.split(".").reduce((acc,cur) => acc*256 + +cur) 
}

console.log(ip_to_int32("128.32.10.1"), 2,149,583,361)