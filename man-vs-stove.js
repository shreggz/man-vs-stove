let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        playRound(playerSelection);
    });
});

function playRound(playerSelection) {
    if (playerSelection == "rock") {
        let result = document.createElement('p');
        result.textContent = "You lose. Stove pulverized your rock.";
        gameResult.appendChild(result);
        computerScore++;
    } else if (playerSelection == "paper") {
        let result = document.createElement('p');
        result.textContent = "You lose. Stove shredded your paper.";
        gameResult.appendChild(result);
        computerScore++;
    } else if (playerSelection == "scissors") {
        let result = document.createElement('p');
        result.textContent = "You lose. Stove smashed your scissors.";
        gameResult.appendChild(result);
        computerScore++;
    }
    updateScoreboard(playerScore, computerScore);
}

function updateScoreboard(playerScore, computerScore) {
    playerScoreboard.textContent = `${playerScore}`;
    computerScoreboard.textContent = `${computerScore}`;
    declareWinner(playerScore, computerScore);
}

function declareWinner(playerScore, computerScore) {
    if (playerScore == 3) {
        winnerDeclaration.textContent = "You killed the machine. Cheers!";
        let restart = document.createElement("button");
        restart.innerHTML = "Play again?";
        playAgain.appendChild(restart);
        restart.addEventListener('click', refreshPage);
        disablePlayerMoves();
    } else if (computerScore == 3) {
        winnerDeclaration.textContent = "Stove killed you. Did you really think you had a chance?";
        let restart = document.createElement("button");
        restart.innerHTML = "Play again?";
        playAgain.appendChild(restart);
        restart.addEventListener('click', refreshPage);
        disablePlayerMoves();
    }
}

const refreshPage = () => {
    location.reload();
}

function disablePlayerMoves () {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}