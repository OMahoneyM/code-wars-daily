// Description:
// --------------------------------------
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

//     1 <= month <= 12


// Solution:
// --------------------------------------
const quarterOf = month => {
    if((month >= 1) && (month < 4)) return 1
    if((month >= 4) && (month < 7)) return 2
    if((month >= 7) && (month < 10)) return 3
    if((month >= 10) && (month <= 12)) return 4
}


// Simpler Solution:
// --------------------------------------
const quarterOf2 = m => Math.ceil(m/3);