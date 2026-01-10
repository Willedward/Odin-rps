console.log("Welcome to rock paper scissors!");


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

/* Human Choice */
function getHumanChoice()
{
    let choice = prompt("Please Enter which do you want: ");
    return choice;
}

function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toLowerCase();

    announcement_draw = "Draw!";
    announcement_lose = "You Lose! "+computerChoice + " beats "+humanChoice;
    announcement_win = "You Win! "+humanChoice + " beats "+ computerChoice; 

    let human_win = false;
    if(humanChoice == 'paper')
    {
        if(computerChoice == 'rock') {human_win = true; console.log(announcement_win);}
        else if(computerChoice == 'scissors') {human_win = false; console.log(announcement_lose);}
        else{
            console.log(announcement_draw);
            return undefined;
        }
    }

    if(humanChoice == 'rock')
    {
        if(computerChoice == 'scissors') {human_win = true; console.log(announcement_win);}
        else if(computerChoice == 'paper') {human_win = false; console.log(announcement_lose);}
        else{
            console.log(announcement_draw)
            return undefined;
        }
    }

    if(humanChoice == 'scissors')
    {
        if(computerChoice == 'paper') {human_win = true; console.log(announcement_win);}
        else if(computerChoice == 'rock') {human_win = false; console.log(announcement_lose);}
        else{
            console.log(announcement_draw)
            return undefined;
        }
    }
    return human_win

    
}

let playerScore = 0;
let computerScore = 0;



/* Main */
for(let i = 0; i < 5; i++)
{
    let decision = playRound(getHumanChoice(), getComputerChoice());
    if(decision)playerScore+=1;
    else if(decision == false) computerScore += 1;
    

    display_comp = 'Computer score: '+computerScore;
    display_human = 'Human score: '+playerScore;
    console.log('round: '+(i+1));
    console.log(display_comp);
    console.log(display_human);
    console.log('\n');
}

console.log('Final Verdict:')
if(playerScore>computerScore) console.log('Player Wins!')
else if(playerScore < computerScore) console.log('Computer Wins!');
else console.log('Draw!');