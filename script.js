let hands = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let index = Math.floor(Math.random() * hands.length);
    console.log(hands[index]);
}

computerPlay();