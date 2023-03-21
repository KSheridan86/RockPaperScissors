// declare variables attach click handlers
let winner = false;
let turns = 3;
let turnDisplay = document.getElementById('turns-left-number');
turnDisplay.innerHTML = turns;
let playAgainBtn = document.getElementById('play-again-btn');
playAgainBtn.addEventListener('click', startAgain);

// Attach click handlers to the game choices
let rock = document.getElementById('rock');
rock.addEventListener('click', handleInput);
let paper = document.getElementById('paper');
paper.addEventListener('click', handleInput);
let scissors = document.getElementById('scissors');
scissors.addEventListener('click', handleInput);

// Generate a random number and assign the computer's choice
function computerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Compare the user's choice and the computer's choice
function compareChoices(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "You lose! Paper covers rock.";
        } else {
            winner = true;
            return "You win! Rock smashes scissors.";
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return "You lose! Scissors cut paper.";
        } else {
            winner = true;
            return "You win! Paper covers rock.";
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "You lose! Rock smashes scissors.";
        } else {
            winner = true;
            return "You win! Scissors cut paper.";
        }
    }
}

// Grab the user's choice by the ID of the option they click and display the result
function handleInput() {
    if (turns > 0) {
        let userChoice = this.id;
        let computer = computerChoice();
        let result = compareChoices(userChoice, computer);
        let playAgain = document.getElementById('play-again');
        document.getElementById('result').innerHTML = result;
        playAgain.style.display = 'block';
        if (turns === 1) {
            playAgain.style.display = 'none';
        }
        turns--;
        turnDisplay.innerHTML = turns;
        if (turns === 0) {
            deactivateChoices();
            document.getElementById('result').innerHTML = result + "<br>" + "Game over!";
        }
        if (winner) {
            deactivateChoices();
            turns = 0;
            turnDisplay.innerHTML = turns;
            playAgain.style.display = 'none';
            document.getElementById('result').innerHTML = result + "<br>" + "You win the game!";
        }
    }
}

// Start the game again
function startAgain() {
    window.location.reload();
}

// deactivate game choices if the user has no turns left or wins the game
function deactivateChoices() {
    playAgainBtn.style.display = 'inline';
    rock.style.display = 'none';
    paper.style.display = 'none';
    scissors.style.display = 'none';
}