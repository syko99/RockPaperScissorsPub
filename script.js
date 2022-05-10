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
   return play(playerSelection,computerPlay());
}

function play(playerSelection, computerSelection) {

    let win = `You won this round! ${playerSelection} beats ${computerSelection}`;
    let lose = `You lost this round! ${computerSelection} beats ${playerSelection}`;
    let draw = `There was a draw!`;

    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            console.log(win);
            return 1;
        }
        if (computerSelection == 'paper') {
            console.log(lose);
            return -1;
        }
        else{
            console.log(draw);
            return 0;
        }
    } 
    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log(win);
            return 1;
        }
        if (computerSelection == 'scissors') {
            console.log(lose);
            return -1;
        }
        else{
            console.log(draw);
            return 0;
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            console.log(win);
            return 1;
        }
        if (computerSelection == 'rock') {
            console.log(lose);
            return -1;
        }
        else{
            console.log(draw);
            return 0;
        }
    }
}

function game() {
    
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        let point = initiate();
        if (point == 1){
            playerScore += 1;
        }
        if (point == -1){
            computerScore += 1;
        }
        console.log(`You: ${playerScore} \t Comp: ${computerScore}`);
    }
    if(playerScore > computerScore){
        return 'You won the game!';
    }
    if(computerScore > playerScore){
        return 'You lost the game!';
    }
    else {
        return "It's a Draw!";
    }
}

console.log(game());