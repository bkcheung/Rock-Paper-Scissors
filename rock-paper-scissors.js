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
    else{ 
        if(computerSelection==='Rock'){
            result = 'You win! Paper beats Rock';
        }
        else if(computerSelection==='Scissors'){
            result = 'You lose, paper loses to Scissors';
        }
    }
    console.log(result);
    return result;
}