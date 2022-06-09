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

//giving each button click function
buttons.forEach((btn) =>{
    btn.addEventListener("click", function(e){
        play(this.id, computerPlay());
        round++;
        roundText.textContent = `Round: ${round}`;
        //edit this number(below) to set number of rounds, make sure to adjust game messages!
        if(round >= 5){
            displayWinner();
            disableButtons();
        }
    })
});

// reset button
reset.addEventListener("click", ()=>{
    round = 1;
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

//compares user hand to computer hand adjusts scores.
function play(playerSelection, computerSelection) {
    setTimeout(()=>{
        userScoreText.style.animation = "none";
        compScoreText.style.animation = "none";
    },250);
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            userPoint();
        }
        if (computerSelection == 'paper') {
            compPoint();
        }
    } 
    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            userPoint();
        }
        if (computerSelection == 'scissors') {
            compPoint();
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            userPoint();
        }
        if (computerSelection == 'rock') {
            compPoint();
        }
    }
}

// adds point for user
function userPoint(){
    userScore += 1;
    userScoreText.style.animation = "greenText 250ms forwards";
    userScoreText.textContent = `You: ${userScore}`;
    roundText.textContent = `Round: ${round}`;
}

// adds point for computer
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

//disabled buttons when game is over
function disableButtons(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    buttons.forEach((hand)=>{
        hand.classList.remove("handhover");
    });
}

//enables buttons upon reset
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