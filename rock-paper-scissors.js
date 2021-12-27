function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = options[Math.floor(Math.random()*3)];
    console.log(computerChoice);
    return computerChoice;
}

