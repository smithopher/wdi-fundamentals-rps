////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    move = getInput() || move;
    return move;
}

function getComputerMove(move) {
    move = randomPlay() || move;
    return move;

function getWinner(pMove, cMove) {
    var winner;
    if ((pMove === 'rock') && (cMove === 'rock')) {
        winner = 'Tie';
    } else if ((pMove === 'rock') && (cMove === 'paper')) {
        winner = 'Computer';
    } else if ((pMove === 'rock') && (cMove === 'scissors')) {
        winner = 'Player';
    } else if ((pMove === 'scissors') && (cMove === 'rock')) {
        winner = 'Computer';
    } else if ((pMove === 'scissors') && (cMove === 'paper')) {
        winner = 'Player';
    } else if ((pMove === 'scissors') && (cMove === 'scissors')) {
        winner = 'Tie';
    } else if ((pMove === 'paper') && (cMove === 'rock')) {
        winner = 'Player';
    } else if ((pMove === 'paper') && (cMove === 'paper')) {
        winner = 'Tie';
    } else if ((pMove === 'paper') && (cMove === 'scissors')) {
        winner = 'Computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

