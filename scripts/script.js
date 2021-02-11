// Returns a random selection of rock, paper, or scissors
function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[randomIndex(options.length)];
}

// Helper function
// Returns random integer less than maxSize parameter
//  0 <= returnInteger < maxSize
function randomIndex(maxSize) {
    return Math.floor(Math.random() * Math.floor(maxSize));
}

// Compares player selection to computer selection
// Returns the result as a String
function playRound(playerSelection, computerSelection) {
    let result = "";

    if(playerSelection === "rock") {
        if(computerSelection === "scissors") {
            result += "Round Won! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            result += "Round Lost! Paper beats Rock";
        } else {
            result += "Tie game!";
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "scissors") {
            result += "Round Lost! Scissors beats Paper";
        } else if (computerSelection === "paper") {
            result += "Tie game!";
        } else {
            result += "Round Won! Paper beats Rock";
        }
    } else {
        if(computerSelection === "scissors") {
            result += "Tie game!";
        } else if (computerSelection === "paper") {
            result += "Round Won! Scissors beats Paper";
        } else {
            result += "Round Lost! Rock beats Scissors";
        }
    }
    return result;
}

// Lets user play game by clicking buttons on webpage
const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => button.addEventListener("click", () => {
    let computerSelection = computerPlay();
    let roundResult = playRound(button.id, computerSelection);
    
    displayRoundResult(roundResult);
    displayScore(roundResult);
}));

// Displays the result of the round
function displayRoundResult(roundResult) {
    removePreviousChildren("result");

    const resultDiv = document.getElementById("result");
    const result = document.createElement("h2");
    result.textContent = roundResult;
    resultDiv.appendChild(result);
}

// Removes any children associated to the id parameter
function removePreviousChildren(id) {
    const previousRoundResult = document.getElementById(id);
    while(previousRoundResult.hasChildNodes()) {
        previousRoundResult.removeChild(previousRoundResult.firstChild);
    }
}

// Global variables to hold overall game score
let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;

// Displays current score
function displayScore(roundResult) {
    removePreviousChildren("score");

    roundResult = roundResult.split(" ");
    if(roundResult[1] === "Won!") {
        PLAYER_SCORE += 1;
    } else if(roundResult[1] === "Lost!") {
        COMPUTER_SCORE += 1;
    } 

    const scoreDiv = document.getElementById("score");
    const playerScoreElement = document.createElement("h3");
    const computerScoreElement = document.createElement("h3");
    
    playerScoreElement.textContent = "Your Score: " + PLAYER_SCORE;
    computerScoreElement.textContent = "Computer's Score: " + COMPUTER_SCORE;

    scoreDiv.appendChild(playerScoreElement);
    scoreDiv.appendChild(computerScoreElement);

    gameEnd(scoreDiv);
}

// Displays winner after 5 rounds are played
// Resets scores to 0
function gameEnd(scoreDiv) {
    if(PLAYER_SCORE === 5 || COMPUTER_SCORE === 5) {
        PLAYER_SCORE = 0;
        COMPUTER_SCORE = 0;

        const gameResult = document.createElement("h1");
        gameResult.textContent = (PLAYER_SCORE === 5 ? "YOU WIN!" : "YOU LOSE!");
        gameResult.textContent += " Play again?";

        scoreDiv.appendChild(gameResult);
        
    }
}

/* NOT USED: LOGIC TO PLAY ROCK PAPER SCISSORS GAME IN CONSOLE ONLY

// Intro to game
function gameIntro() {
    console.log("Let's play Rock, Paper, or Scissors! Best of 5 wins!");
}
*/

/*
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
*/

/*
// Prompts user for selection
// Continues to prompt user if invalid selection given
function playerPlay() {
    let playerSelection = prompt("Make your selection: Rock, Paper, Scissors").toLowerCase();
    let options = ["rock", "paper", "scissors"];

    while(!options.includes(playerSelection)) {
        playerSelection = prompt("Invalid selection! Pick again: Rock, Paper, Scissors").toLowerCase();
    }

    return playerSelection;
}
*/

/*
// Plays 1 complete rounds of rock-paper-scissors
// Tie rounds are played again
function game() {
    gameIntro();

    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 1; i++) {
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
*/