// Description:
// --------------------------------------
// Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?
// The Challenge

// Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

// Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.


// Solution:
// --------------------------------------
function findScreenHeight(width, ratio) {
    ratio = ratio.split(":")
    let height = width * ratio[1] / ratio[0]
    return `${width}x${height}`
}

console.log(findScreenHeight(1024, "4:3"), "1024x768")


// Alt Solution:
// --------------------------------------
function findScreenHeight(width, ratio) {
    const [wRatio, hRatio] = ratio.split(":")
    let height = width * hRatio / wRatio
    return `${width}x${height}`
}

console.log(findScreenHeight(1024, "4:3"), "1024x768")