window.onload = beginAnimation();
let playerScore = 0;
let computerScore = 0;

function beginAnimation(){
    const toAnimate = document.querySelectorAll('.toAnimate');
    for (let i=0; i < toAnimate.length; i++){
        setTimeout(function () {
            toAnimate[i].classList.add('animateIn');
        }, (1000*i));
    }
}
function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = options[Math.floor(Math.random()*options.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let result;

    if(playerSelection===computerSelection){
        result = `It\'s a tie!`;
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

    updateScores(result, playerScore, computerScore, playerSelection, computerSelection);
    isGameOver(playerScore, computerScore);

    return result;
}

function updateScores(result, playerScore, computerScore, playerSelection, computerSelection){
    switch(playerSelection){
        case 'Rock':
            pIcon.textContent = '🪨';
            break;
        case 'Paper':
            pIcon.textContent = '🗞';
            break;
        case 'Scissors':
            pIcon.textContent = '✂️';
            break;
    }
    switch(computerSelection){
        case 'Rock':
            cIcon.textContent = '🪨';
            break;
        case 'Paper':
            cIcon.textContent = '🗞';
            break;
        case 'Scissors':
            cIcon.textContent = '✂️';
            break;
    }

    container.textContent = result;
    playerScoreCount.textContent = `Player: ${playerScore}`;
    compScoreCount.textContent = `Box: ${computerScore}`;
    return;
}

function randomPrize(){
    let prizeName = ['BEJWELED CROWN', 'DIAMOND', 'FLIP FLOP', 'MYSTERIOUS KEY'];
    let prizeIcons = ['👑','💎','🩴','🗝'];
    let randNum = Math.floor(Math.random()*prizeName.length);
    let rPrize = prizeName[randNum];
    let rPrizeIcon = prizeIcons[randNum];
    prizeIcon.textContent = rPrizeIcon;
    prize.textContent = rPrize;
    prizeContainer.classList.add('show');
    return;
}


function isGameOver(playerScore, computerScore){
    if (playerScore <5 && computerScore <5) return;
    else if(playerScore>=5){
        
        popupText.textContent = `You win! With a soft pop, the lid swings open. `+
                                `Inside, you obtain: `;
        randomPrize();
        popupReset.textContent = 'Open another box!'
    }
    else{
        popupText.textContent = 'You lose, the lock doesn\'t budge.';
        popupReset.textContent = 'Try again.'
        prizeIcon.textContent = '🤷🏻‍♀️';
        prize.textContent = 'TRY AGAIN';
        prizeContainer.classList.add('show');

    }
    popup.classList.add('show');
}

function restart(){
    playerScore = 0;
    computerScore = 0;
    container.textContent = 'Pending Player Selection...';

    pIcon.textContent = '?';
    cIcon.textContent = '?';
    playerScoreCount.textContent = playerScore;
    compScoreCount.textContent = computerScore;
    popup.classList.toggle('show');
    prizeContainer.classList.toggle('show');
}

const container = document.querySelector('#container');
container.textContent = 'Pending Player Selection...';

const playerScoreCount = document.querySelector('.pScore');
const compScoreCount = document.querySelector('.cScore');
const pIcon = document.querySelector('.pIcon');
const cIcon = document.querySelector('.cIcon');

const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popupContainer');
const popupText = document.querySelector('.popupText');
const popupReset = document.querySelector('.reset');

const prize = document.querySelector('.prize');
const prizeIcon = document.querySelector('.prizeIcon');
const prizeContainer = document.querySelector('.prizeContainer');

const buttons = document.querySelectorAll('.option');

buttons.forEach(button => button.addEventListener('click', function(e){
    let playerSelection = e.target.id;
    playRound(playerSelection, computerPlay());
}))

popupReset.addEventListener('click', () =>restart());