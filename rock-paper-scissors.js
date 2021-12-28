const container = document.querySelector('#container');
const resultWindow = document.createElement('div');
resultWindow.classList.add('results');

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
    else if(playerSelection==='Rock'){
        if(computerSelection==='Scissors'){
            result = 'You win! Rock beats Scissors';
        }
        else if(computerSelection==='Paper'){
            result = 'You lose, Rock loses to Paper';
        }
    }
    else if(playerSelection==='Scissors'){
        if(computerSelection==='Rock'){
            result = 'You lose! Scissors loses to Rock';
        }
        else if(computerSelection==='Paper'){
            result = 'You win, Scissors beat Paper';
        }
    }
    else if(playerSelection==='Paper'){ 
        if(computerSelection==='Rock'){
            result = 'You win! Paper beats Rock';
        }
        else if(computerSelection==='Scissors'){
            result = 'You lose, paper loses to Scissors';
        }
    }
    else{
        result = 'Please enter a valid selection.';
    }

    console.log(result);
    resultWindow.textContent = result;
    container.append(resultWindow);
    return result;
}

function game(){
    let winCount = 0;
    let result;
    para.textContent = 'Final Result: ';

    // for(i=0; i<5; i++){
    //     playerSelection = window.prompt('Rock, Paper, or Scissors?');
    //     let gameResult = playRound(playerSelection, computerPlay());

    //     if(gameResult.slice(0,7)==='You win'){
    //         winCount++;
    //     }
    //     // Don't count invalid entries, decrement counter
    //     else if(gameResult.slice(0,6)==='Please'){
    //         --i;
    //     }
    // }
    if(winCount>2){
        result = `You won ${winCount} out of 5 games, congrats!`;
    }
    else{
        loseCount = 5 - winCount;
        result = `You lost ${loseCount} out of 5 games, try again next time!`;
    }
    return result;
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', function(e){
    let playerSelection = e.target.id;
    playRound(playerSelection, computerPlay());
}))
