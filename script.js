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
            return "You win! Rock smashes scissors.";
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return "You lose! Scissors cut paper.";
        } else {
            return "You win! Paper covers rock.";
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "You lose! Rock smashes scissors.";
        } else {
            return "You win! Scissors cut paper.";
        }
    }
}

// Grab the user's choice by the ID of the option they click and display the result
function handleInput() {
    let userChoice = this.id;
    let computer = computerChoice();
    let result = compareChoices(userChoice, computer);
    let playAgain = document.getElementById('play-again');
    document.getElementById('result').innerHTML = result;
    playAgain.style.display = 'block';
}

// Attach click handlers to the game choices
document.getElementById('rock').addEventListener('click', handleInput);
document.getElementById('paper').addEventListener('click', handleInput);
document.getElementById('scissors').addEventListener('click', handleInput);