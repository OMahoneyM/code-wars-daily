// Description:
// --------------------------------------
// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!


// Solution:
// --------------------------------------
function fireFight(s) {
    return s.split(" ").map(e => e === "Fire" ? "~~" : e).join(" ");
}

console.log(fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~")
console.log(fireFight("Mast Deck Rudder Sail"), "Mast Deck Rudder Sail")