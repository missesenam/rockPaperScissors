const displayPlayerChoice = document.querySelector('#player-choice')
const displayComputerChoice = document.querySelector('#computer-choice')
const possibleChoices = document.querySelectorAll('img')
const gameResult = document.querySelector('#game-result')
const  images = ['rock-svgrepo-com.svg', 'hand-svgrepo-com.svg', 'hand-scissors-solid-svgrepo-com.svg'];

// player choice
let playerChoiceImage;
let computerChoiceImage = document.querySelector('#displayImage');
let result;
// user choice display
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    displayPlayerChoice.innerHTML = '';
    playerChoiceImage = document.createElement('img');
    playerChoiceImage.src = e.target.src
    playerChoiceImage.alt = e.target.alt
    playerChoiceImage.width = e.target.width
    playerChoiceImage.id =  e.target.id
    displayPlayerChoice.appendChild(playerChoiceImage)
    computerPlayerChoiceImage()
    theGameResult()
    resetGame()
    winningCounter()
}))
// computer's choice
function computerPlayerChoiceImage(){
    const randomNumber = Math.floor(Math.random() * 3)
    const choices = ['rock', 'paper', 'scissors'];

    if(randomNumber === 0){
        computerChoiceImage.src = images[0]
        computerChoiceImage.alt = 'rock'
        computerChoiceImage.width = 80
    }
    if(randomNumber === 1){
        computerChoiceImage.src = images[1]
        computerChoiceImage.alt = 'paper'
        computerChoiceImage.width = 80
    }
    if(randomNumber === 2){
        computerChoiceImage.src = images[2]  
        computerChoiceImage.alt = 'scissors'
        computerChoiceImage.width = 80
    }
    computerChoiceImage.classList.remove('hidden')
    computerChoiceImage.id = choices[randomNumber];
}
// result
function theGameResult(){
    const playerChoice = playerChoiceImage.id;
    const computerChoice = computerChoiceImage.id;

    if (playerChoice === computerChoice){
        result = 'it\'s a draw!'
    }else if(
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ){
        result = 'You win!';
        playerWins++;
    } else{
        result = 'You lose!';
        computerWins++;
    }
    gameResult.textContent = result
}
// game counters
const playerWin = document.getElementById('player-wins')
const computerWin = document.getElementById('computer-wins')
// Counters for the player and computer win wins
let playerWins = 0;
let computerWins = 0;
function winningCounter(){
    playerWin.textContent = `${playerWins}`
    computerWin.textContent = `${computerWins}`
}
// reset game
function resetGame(){
    const reset = document.getElementById('game-reset')
reset.addEventListener('click', () =>{

        displayPlayerChoice.innerHTML = '';
        gameResult.textContent = ''
        computerChoiceImage.src = ''
        computerChoiceImage.classList.add('hidden')
        playerWins = 0;
        computerWins = 0;
        playerWin.textContent = ''
        computerWin.textContent= ''
})
}
