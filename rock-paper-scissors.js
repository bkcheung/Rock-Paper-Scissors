function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = options[Math.floor(Math.random()*3)];
    return computerSelection;
}

function singlePlay(playerSelection, computerSelection){
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
    return result;
}

function game(){
    let winCount = 0;
    let result;

    for(i=0; i<5; i++){
        playerSelection = window.prompt('Rock, Paper, or Scissors?');
        let gameResult = singlePlay(playerSelection, computerPlay());
        if(gameResult.slice(0,7)==='You win'){
            winCount++;
        }
        // Don't count invalid entries, decrement counter
        else if(gameResult.slice(0,6)==='Please'){
            --i;
        }
    }
    console.log(winCount);
    if(winCount>2){
        result = `You won ${winCount} out of 5 games, congrats!`;
    }
    else{
        loseCount = 5 - winCount;
        result = `You lost ${loseCount} out of 5 games, try again next time!`;
    }
    console.log(result);
    return result;
}