// Function to generate a random computer choice
function computerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to compare the choices and determine the winner
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

// Function to handle user input
function handleInput() {
    let userChoice = this.id;
    let computer = computerChoice();
    let result = compareChoices(userChoice, computer);
    document.getElementById('result').innerHTML = result;
}

// Attach click handlers to the buttons
document.getElementById('rock').addEventListener('click', handleInput);
document.getElementById('paper').addEventListener('click', handleInput);
document.getElementById('scissors').addEventListener('click', handleInput);