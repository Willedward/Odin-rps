//const { cloneElement } = require("react");

console.log("Welcome to rock paper scissors!");

const container = document.querySelector("#container");
let human_choice = ""; 

/* Computer Choice */
function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3)
    if(choice == 0)
    {
        return 'rock';
    }else if(choice == 1)
    {
        return 'paper';
    }else{
        return 'scissors';
    }
}


/* Main game logic */
function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toLowerCase();

    announcement_draw = "Draw!";
    announcement_lose = "You Lose! "+computerChoice + " beats "+humanChoice;
    announcement_win = "You Win! "+humanChoice + " beats "+ computerChoice; 

    let human_win = false;
    if(humanChoice == 'paper')
    {
        if(computerChoice == 'rock') {human_win = true; intermittent_ui(announcement_win);}
        else if(computerChoice == 'scissors') {human_win = false; intermittent_ui(announcement_lose);}
        else{
            intermittent_ui(announcement_draw);
            return undefined;
        }
    }

    if(humanChoice == 'rock')
    {
        if(computerChoice == 'scissors') {human_win = true; intermittent_ui(announcement_win);}
        else if(computerChoice == 'paper') {human_win = false; intermittent_ui(announcement_lose);}
        else{
            intermittent_ui(announcement_draw);
            return undefined;
        }
    }

    if(humanChoice == 'scissors')
    {
        if(computerChoice == 'paper') {human_win = true; intermittent_ui(announcement_win);}
        else if(computerChoice == 'rock') {human_win = false; intermittent_ui(announcement_lose);}
        else{
            intermittent_ui(announcement_draw);
            return undefined;
        }
    }
    return human_win
}

function intermittent_ui(txt)
{
    
    document.querySelector('.outputer').remove();
    console.log('help');
    const outputer = document.createElement('div');
    outputer.classList.add('outputer');
    outputer.textContent = txt;
    outputer.setAttribute('style', 'color:rgb(2, 9, 74); font-size: 28px')
    container.insertAdjacentElement('afterend', outputer);
}

function checkWinner()
{
    if(playerScore === 5){
        return 'human';
    }else if(computerScore === 5)
    {
        return 'computer';
    }else
    {
        return 'play';
    }
}

function updateUI()
{
    
      pscore.textContent = " "+playerScore;
      cscore.textContent = " "+computerScore;
      playerbox.removeChild(pscore);
      compbox.removeChild(cscore);

      playerbox.appendChild(pscore);
      compbox.appendChild(cscore);
}

function finalwinner(player)
{

    const finalbox = document.createElement('div');
    finalbox.classList.add('finalbox');
    finalbox.textContent = `Game Over! ${player} Wins!!!`;
    finalbox.setAttribute('style', 'color:red; font-size:20px; padding:5px; margin:15px;');
    const ovr = document.querySelector('.ovr');
    ovr.insertAdjacentElement('afterend', finalbox);
    document.querySelector('#scissors').setAttribute('disabled', 'disabled');
    document.querySelector('#paper').setAttribute('disabled', 'disabled');
    document.querySelector('#rock').setAttribute('disabled', 'disabled');
    
}

let playerScore = 0;
let computerScore = 0;

const outputer = document.createElement('div');
outputer.classList.add('outputer');
outputer.textContent = 'Game starts!';
outputer.setAttribute('style', 'color: rgb(156, 47, 47); ');
container.insertAdjacentElement('afterend', outputer);


const playerbox = document.querySelector("#playerbox");
const compbox = document.querySelector("#compbox");

const pscore = document.createElement("p");
const cscore = document.createElement("p");
pscore.textContent = " "+playerScore;
cscore.textContent = " "+computerScore;
playerbox.appendChild(pscore);
compbox.appendChild(cscore);




container.addEventListener("click", (event) => {
    event.preventDefault();

    let target = event.target;
    human_choice = target.id;
    console.log("here human choice : " + human_choice);

    let res = playRound(human_choice, getComputerChoice());
    if (res == true) playerScore += 1;
    else if(res == false) computerScore += 1;

    updateUI();
    let win = checkWinner();
    if(win === 'human')
    {
        finalwinner('human');
    }else if(win === 'computer')
    {
        finalwinner('computer');
    }

    human_choice = "";
});


