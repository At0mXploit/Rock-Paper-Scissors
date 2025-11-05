
// Computer choice function

function getComputerChoice(){
    const random = Math.random()
    if (random < 0.33) {
        return "rock";
    } else if (random < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Human choice function

function getHumanChoice() {
    const choice = prompt("Enter your choice: rock, paper, or scissors");
    
    // If user clicks Cancel, exit the game or use default
    if (choice === null) {
        console.log("Game cancelled");
        return null;
    }
    
    return choice.toLowerCase();
}

// Score variables

let humanScore = 0;
let computerScore = 0;

// Play a single round 

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    // Check for tie

    if(humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    // Check all winning conditions for human

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper") 
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);

    }
}

// Play full game

function playGame() {
    // Reset scores
    humanScore = 0;
    computerScore = 0;
    console.log("Starting Rock Paper Scissors Game!");
    console.log("=====================================");

    // Play 5 rounds

    for (let round = 1; round<=5; round++){
        console.log(`\n--- Round ${round} ---`);
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
    }

    // Final results
    console.log("\n=====================================");
    console.log("FINAL RESULTS:");
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("YOU WIN THE GAME!");
    } else if (computerScore > humanScore) {
        console.log("COMPUTER WINS THE GAME!");
    } else {
        console.log("IT'S A TIE GAME!");
    }
    console.log("=====================================");
}

// Start the game
playGame();



