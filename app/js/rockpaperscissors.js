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
    if (move === null) {
        return getInput();
    } else {
        return move;
    }
}

function getComputerMove(move) {
    if (move === null) {
        return randomPlay();
    } else {
        return move;
    }
}

function getWinner(playerMove,computerMove) {
    var winner = ['player', 'computer', 'tie'];
    if (playerMove === computerMove) {
        return (winner[2]);
    } else if ((playerMove === "rock") && (computerMove === "scissors")) {
        return (winner[0]);
    } else if ((playerMove === "scissors") && (computerMove === "paper")) {
        return (winner[0]);
    } else if ((playerMove === "paper") && (computerMove === "rock")) {
        return (winner[0]);
    } else {
        return (winner[1]);
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while ((playerWins < 5) && (computerWins < 5)) {
        if (winner === 'player') {
            playerWins += 1;
            console.log('Player chose' + playerMove + 'while Computer chose' + computerMove);
            console.log('Player wins!');
            console.log('The score is currently' + playerWins + 'to' + 'computerWins');
        } else if (winner === 'computer') {
            computerWins += 1;
            console.log('Player chose' + playerMove + 'while Computer chose' + computerMove);
            console.log('Computer wins!');
            console.log('The score is currently' + playerWins + 'to' + 'computerWins');
        } else if (winner === 'tie') {
            console.log ('That was a tie.');
        }
    }
    return [playerWins, computerWins];
}

