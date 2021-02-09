function computerPlay() {
    let choice = [rock, paper, sissors];
    return choice(randomIndex(choice.length));
}

// Helper function returns random integer less than maxSize parameter
// 0 <= returnValue < maxSize
function randomIndex(maxSize) {
    return Math.floor(Math.random() * Math.floor(maxSize));
}

