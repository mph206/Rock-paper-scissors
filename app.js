// Selectors
const playerTurn = document.querySelectorAll('#player img');
const computerTurn = document.querySelectorAll('#computer img');
let playerScoreDisplay = document.querySelectorAll('#outcome p')[0];
let computerScoreDisplay = document.querySelectorAll('#outcome p')[2];
let roundOutcome = document.querySelector('#round-outcome');

let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

let computerRock = 0;
let computerRaper = 0;
let computerScissor = 0;

let playerRock = 0;
let playerRaper = 0;
let playerScissor = 0;

// Listen for player turn
let playerListener = playerTurn.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.add('blue-select');
        console.log([...playerTurn].indexOf(button));
        playerChoice = [...playerTurn].indexOf(button);
        computerResponse();
        compare();
    })
})

// Generate computer response 
let computerResponse = () => {
    let random = Math.random();
    if (random < 1 / 3) {
        computerTurn[0].classList.add('red-select');
        computerChoice = 0;
    } else if (random < 2 / 3) {
        computerTurn[1].classList.add('red-select');
        computerChoice = 1;
    } else {
        computerTurn[2].classList.add('red-select');
        computerChoice = 2;
    }
}

// Compare and display scores
const compare = () => {
    let printCompName = computerTurn[computerChoice].getAttribute('alt');
    let printPlayerName = playerTurn[playerChoice].getAttribute('alt');
    if (computerChoice === playerChoice) {
        roundOutcome.innerHTML = `Draw - ${printCompName} matches ${printPlayerName}`;
        playerScore += 1;
        computerScore += 1;  
    } if (computerChoice - playerChoice === 1 || computerChoice - playerChoice === -2) {
        roundOutcome.innerHTML = `You lose - ${printCompName} beats ${printPlayerName}`; 
        computerScore +=1;
    } if (computerChoice - playerChoice === -1 || computerChoice - playerChoice === 2) {
        roundOutcome.innerHTML = `You win - ${printPlayerName} beats ${printCompName}`; 
        playerScore +=1;
    }
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
    nextRound();
}

// Wipe selection ready for next round
const nextRound = () => {
    setTimeout(() => {
        computerTurn[computerChoice].classList.remove('red-select');
        playerTurn[playerChoice].classList.remove('blue-select');
    }, 1500);
} 