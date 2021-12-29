let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = options[Math.floor(Math.random()*3)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let result;

    if(playerSelection===computerSelection){
        result = `It\'s a tie! Computer also selected ${computerSelection}.`;
    }
    else if(
        (playerSelection==='Rock' && computerSelection==='Scissors') ||
        (playerSelection==='Paper' && computerSelection==='Rock') ||
        (playerSelection==='Scissors' && computerSelection==='Paper')){
        result = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }
    else if(
        (playerSelection==='Rock' && computerSelection==='Paper') ||
        (playerSelection==='Paper' && computerSelection==='Scissors') ||
        (playerSelection==='Scissors' && computerSelection==='Rock')){
        result = `You lose, ${playerSelection} loses to ${computerSelection}`;
        computerScore++;
    }
    resultWindow.textContent = result;
    scoreCounter.textContent = `Player score: ${playerScore}, Computer score: ${computerScore}`;

    container.append(resultWindow);
    container.append(scoreCounter);
    isGameOver(playerScore, computerScore);

    return result;
}

function isGameOver(playerScore, computerScore){
    if (playerScore <5 && computerScore <5) return;
    else if(playerScore>=5){
        winnerOutput.textContent='You win!';
    }
    else{
        winnerOutput.textContent='Computer wins, try again next time!';
    }

    resetButton.classList.add('show');
    resetButton.textContent = 'Reset';

    container.append(winnerOutput);
    container.append(resetButton);

}

function restart(){
    playerScore = 0;
    computerScore = 0;

    scoreCounter.textContent = `Player score: ${playerScore}, Computer score: ${computerScore}`;
    resultWindow.textContent ='';
    winnerOutput.textContent ='';
    resetButton.classList.remove('show');

    container.append(resultWindow);
    container.append(scoreCounter);
    container.append(winnerOutput);
}

const container = document.querySelector('#container');
const scoreCounter = document.createElement('div');
const resultWindow = document.createElement('div');
const winnerOutput = document.createElement('div');
const resetButton = document.createElement('button')

const buttons = document.querySelectorAll('.option');

buttons.forEach(button => button.addEventListener('click', function(e){
    let playerSelection = e.target.id;
    playRound(playerSelection, computerPlay());
}))

resetButton.addEventListener('click', ()=>{
    restart();
})