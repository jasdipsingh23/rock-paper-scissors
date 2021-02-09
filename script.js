// Returns a random selection of rock, paper, or scissors
function computerPlay() {
    let options = [rock, paper, scissors];
    return options(randomIndex(options.length));
}

// Helper function returns random integer less than maxSize parameter
// 0 <= returnInteger < maxSize
function randomIndex(maxSize) {
    return Math.floor(Math.random() * Math.floor(maxSize));
}

// Compares player selection to computer selection
// Returns the result of options given as a String
function playRound(playerSelection, computerSelection) {
    let result = "";

    if(playerSelection === "rock") {
        if(computerSelection === "scissors") {
            result += "You Win! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            result += "You Lose! Paper beats Rock";
        } else {
            result += "Tie game!";
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "scissors") {
            result += "You Lose! Scissors beats Paper";
        } else if (computerSelection === "paper") {
            result += "Tie game!";
        } else {
            result += "You Win! Paper beats Rock";
        }
    } else {
        if(computerSelection === "scissors") {
            result += "Tie game!";
        } else if (computerSelection === "paper") {
            result += "You Win! Scissors beats Paper";
        } else {
            result += "You Lose! Rock beats Scissors";
        }
    }
    return result;
}

// Intro to game 
function gameIntro() {
    console.log("Let's play Rock, Paper, or Scissors!");
    console.log("Best of 5 wins!");
}

// Logs result of player and computer scores
function gameEnd(playerScore, computerScore) {
    console.log("Your score: " + playerScore);
    console.log("Computer score: " + computerScore);
    if(playerScore > computerScore) {
        console.log("You Win!");
    } else {
        console.log("You Lose!");
    }
}

// Prompts user for selection
// Continues to prompt user if invalid selection given
function playerPlay() {
    let playerSelection = prompt("Make your selection: Rock, Paper, Scissors").toLowerCase();
    let options = [rock, paper, scissors];
    while(!options.includes(playerSelection)) {
        playerSelection = prompt("Invalid selection! Pick again: Rock, Paper, Scissors").toLowerCase();
    }
    return playerSelection;
}

// Plays 5 complete rounds of rock-paper-scissors
// Tie rounds are played again
function game() {
    gameIntro();

    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        roundResult = roundResult.split(" ");
        if(roundResult[1] === "Win!") {
            playerScore += 1;
        } else if(roundResult[1] === "Lose!") {
            computerScore += 1;
        } else {
            i--;
        }
    }
    
    gameEnd(playerScore, computerScore);
}