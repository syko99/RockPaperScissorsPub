let hands = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let index = Math.floor(Math.random() * hands.length);
    let computerSelection = hands[index];
    return computerSelection;
}

function initiate() {
   let playerSelection = prompt("Choose Rock, Paper, or Scissors: ");
   playerSelection = playerSelection.toLowerCase();
   if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
       initiate();
   }
   console.log(play(playerSelection,computerPlay()));
}

function play(playerSelection, computerSelection) {

    let win = `You Win! ${playerSelection} beats ${computerSelection}`;
    let lose = `You Lose! ${computerSelection} beats ${playerSelection}`;
    let draw = `It's a draw!`;

    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            return win;
        }
        if (computerSelection == 'paper') {
            return lose;
        }
        else{
            return draw;
        }
    } 
    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return win;
        }
        if (computerSelection == 'scissors') {
            return lose;
        }
        else{
            return draw;
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            return win;
        }
        if (computerSelection == 'rock') {
            return lose;
        }
        else{
            return draw;
        }
    }
}

function game(numRounds) {
    
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < numRounds; i++){
        initiate();
    }

}