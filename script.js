let hands = ['rock', 'paper', 'scissors'];

//user hand buttons
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");
let buttons = document.querySelectorAll(".hands");
let reset = document.querySelector("#reset");

//score keeping
let round = 1;
let userScore = 0;
let compScore = 0;
let userScoreText = document.querySelector("#score__user");
let compScoreText = document.querySelector("#score__comp");

// UI components
let message = document.querySelector("#msg");
let computerEmoji = document.querySelector("#hand__comp-emoji");
let roundText = document.querySelector("#round");


rockBtn.addEventListener("click", function(e){
    play(this.id, computerPlay());
    round++;
    if(round >= 5){
        displayWinner();
        disableButtons();
    }
});
paperBtn.addEventListener("click", function(e){
    play(this.id, computerPlay());
    round++;
    if(round >= 5){
        displayWinner();
        disableButtons();
    }
});
scissorsBtn.addEventListener("click", function(e){
    play(this.id, computerPlay());
    round++;
    if(round >= 5){
        displayWinner();
        disableButtons();
    }
});
reset.addEventListener("click", ()=>{
    round = 0;
    userScore = 0;
    compScore = 0;
    userScoreText.textContent = `You: ${userScore}`
    compScoreText.textContent = `Computer: ${compScore}`
    computerEmoji.textContent = "🖥️"
    message.textContent = "";
    enableButtons();
})

//randomly selects hand for computer and returns it
function computerPlay() {
    let index = Math.floor(Math.random() * hands.length);
    let computerSelection = hands[index];
    if (computerSelection == 'rock'){
        computerEmoji.textContent = "✊"
    } else if(computerSelection == 'paper'){
        computerEmoji.textContent = "🖐️";
    } else {
        computerEmoji.textContent = "✌️";
    }
    return computerSelection;
}

//prompts for user input and uses for player's hand in play function
function initiate() {
   let playerSelection = prompt("Choose Rock, Paper, or Scissors: ");
   playerSelection = playerSelection.toLowerCase();
   if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
       initiate();
   }
   return play(playerSelection,computerPlay());
}

//compares user hand to computer hand and returns winner and score value.
function play(playerSelection, computerSelection) {
    userScoreText.style.animation = "none";
    compScoreText.style.animation = "none";
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            userPoint();
        }
        if (computerSelection == 'paper') {
            compPoint();
        }
        else{
            roundText.textContent = `Round: ${round}`;
            return;
        }
    } 
    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            userPoint();
        }
        if (computerSelection == 'scissors') {
            compPoint();
        }
        else{
            roundText.textContent = `Round: ${round}`;
            return;
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            userPoint();
        }
        if (computerSelection == 'rock') {
            compPoint();
        }
        else{
            roundText.textContent = `Round: ${round}`;
            return;
        }
    }
}
function userPoint(){
    userScore += 1;
    userScoreText.style.animation = "greenText 250ms forwards";
    userScoreText.textContent = `You: ${userScore}`;
    roundText.textContent = `Round: ${round}`;
}
function compPoint(){
    compScore += 1;
    compScoreText.style.animation = "redText 250ms forwards";
    compScoreText.textContent = `Computer: ${compScore}`;
    roundText.textContent = `Round: ${round}`;
}
function displayWinner(){
    if (userScore > compScore){
        message.textContent = "You Won!"
    } else if (userScore < compScore){
        message.textContent = "You Lost!"
    }
    else{
        message.textContent = "It's a Draw!"
    }
}

function disableButtons(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    buttons.forEach((hand)=>{
        hand.classList.remove("handhover");
    });
}
function enableButtons(){
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    buttons.forEach((hand)=>{
        hand.classList.add("handhover");
    });
    round = 1;
    roundText.textContent = `Round: ${round}`;
}