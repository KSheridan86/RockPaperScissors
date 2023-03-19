let winner = false;
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
let turns = 3;

function handleInput() {
    if (turns > 0) {
        let userChoice = this.id;
        let computer = computerChoice();
        let result = compareChoices(userChoice, computer);
        let playAgain = document.getElementById('play-again');
        document.getElementById('result').innerHTML = result + "<br>" + `${turns - 1}` + "turns left";
        playAgain.style.display = 'block';
        if (turns === 1) {
            playAgain.style.display = 'none';
        }
        turns--;
        console.log(turns);
        console.log(winner);
        if (winner) {
            turns = 0;
            playAgain.style.display = 'none';
            document.getElementById('result').innerHTML = result + "<br>" + "You win the game!";
        }
    }
}

// Attach click handlers to the game choices
document.getElementById('rock').addEventListener('click', handleInput);
document.getElementById('paper').addEventListener('click', handleInput);
document.getElementById('scissors').addEventListener('click', handleInput);