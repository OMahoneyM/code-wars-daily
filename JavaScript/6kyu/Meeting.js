// Description:
// --------------------------------------
// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

// Could you make a program that

//     makes this string uppercase
//     gives it sorted in alphabetical order by last name.

// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

// It can happen that in two distinct families with the same family name two people have the same first name too.
// Notes

//     You can see another examples in the "Sample tests".


// Solution:
// --------------------------------------
function meeting(str){
    //split to array on ;
        //map the array
        //split element into a subarray by :
        //return e[1].toUpperCase(), e[0].toUpperCase()
    //sort
    //join on )(
    let attendees = str.split(";").map(e => {
        let fullName = e.split(":")
        return `${fullName[1].toUpperCase()}, ${fullName[0].toUpperCase()}`
    }).sort().join(")(")

    //return `(${attendees})`
    return `(${attendees})`;
}

console.log(meeting("Babe:Ruth;Mariano:Rivera;Derek:Jeter;Tino:Martinez;Victor:Martinez"), "(JETER, DEREK)(MARTINEZ, TINO)(MARTINEZ, VICTOR)(RIVERA, MARIANO)(RUTH, BABE)")