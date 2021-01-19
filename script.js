const resetBtn = document.querySelector('#playagain')
const optionBtn = document.querySelectorAll('div.btnchoice button')
const roundResults = document.querySelector('#totalresults')
const playerresults = document.querySelector('#playerscore')
const compsresults = document.querySelector('#compscore')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')


function computerPlay() {
    num = Math.random();
    
    if (num < 0.33) {
        return 'rock'
    }

    else if (num > 0.33 && num < 0.66) {
        return 'paper'
    }

    else {
        return 'scissors'
    }
}

let PlayerScore = 0
let CompScore = 0

// buttons is a node list. It looks and acts much like an array.
// const buttons = document.querySelectorAll('button');

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {

//   // and for each one we add a 'click' listener
//   button.addEventListener('click', () => {
//     const playselect = button.id;
//     console.log(button.id);
//   });
// });

compsresults.textContent = CompScore;
playerresults.textContent = PlayerScore;

// playerresults.textContent = "test";
// compsresults.textContent = "loltest"

// playerSelection = 'rock';
computerSelection = computerPlay();

startGame()

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
     console.log(playerSelection)
     console.log(computerSelection)

    if (computerSelection == playerSelection) {
        roundResults.textContent = "Tie";
        PlayerScore += 1;
        CompScore +=1;
        playerresults.textContent = PlayerScore;
        compsresults.textContent = CompScore;
        return 'This was a drawer ' + computerSelection + ' '+ playerSelection + '\n' + 'PlayerScore: ' + PlayerScore + ' CompScore: ' + CompScore;
    }

    else if (computerSelection == 'rock' && playerSelection == 'paper') {
        PlayerScore += 1
        playerresults.textContent = PlayerScore;
        compsresults.textContent = CompScore;
        roundResults.textContent = "Player wins";
        roundResults.style.color = "green"
        checkWinner()
        return 'Player wins, paper beats rock\n' + 'PlayerScore: ' + PlayerScore + ' CompScore: ' + CompScore;
    }

    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        CompScore += 1
        compsresults.textContent = CompScore;
        playerresults.textContent = PlayerScore;
        roundResults.textContent = "Computer wins";
        roundResults.style.color = "red"
        checkWinner()
        return 'Computer wins, rock beats scissors\n' + 'PlayerScore: ' + PlayerScore + ' CompScore: ' + CompScore;
    }

    else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        PlayerScore += 1
        playerresults.textContent = PlayerScore;
        compsresults.textContent = CompScore;
        roundResults.textContent = "Player wins";
        roundResults.style.color = "green"
        checkWinner()
        return 'Player wins, scissors beats paper\n' + 'PlayerScore: ' + PlayerScore + ' CompScore: ' + CompScore;
    }

    else if (computerSelection == 'paper' && playerSelection == 'rock') {
        CompScore += 1
        compsresults.textContent = CompScore;
        playerresults.textContent = PlayerScore;
        roundResults.textContent = "Computer wins";
        roundResults.style.color = "red"
        checkWinner()
        return 'Computer wins, paper beats rock\n' + 'PlayerScore: ' + PlayerScore + ' CompScore: ' + CompScore;
    }

    else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        PlayerScore += 1
        playerresults.textContent = PlayerScore;
        roundResults.textContent = "Player wins";
        roundResults.style.color = "green"
        checkWinner()
        return 'Player wins, rock beats scissors\n' + 'PlayerScore: ' + PlayerScore + ' CompScore: ' + CompScore;
    }

    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        CompScore += 1
        compsresults.textContent = CompScore;
        playerresults.textContent = PlayerScore;
        roundResults.textContent = "Computer wins";
        roundResults.style.color = "red"
        checkWinner()
        return 'Computer wins, scissors beats paper\n' + 'PlayerScore: ' + PlayerScore + ' CompScore: ' + CompScore;
    }
    // checkWinner()
}
// /checkWinner()
resetGame();

function checkWinner() {
    if (CompScore == 5 && PlayerScore == 5) {
      roundResults.textContent = "The game is a Tie!";
      roundResults.style.color ='blue';
       optionBtn.forEach(button => {
       button.removeEventListener('click', getPlayerChoice);
     });
    }else if (CompScore == 5) {
       roundResults.textContent = "You Lost the game to a computer!";
       roundResults.style.color ='red';
        optionBtn.forEach(button => {
        button.removeEventListener('click', getPlayerChoice);
      });
    }else if (PlayerScore == 5) {
      roundResults.textContent =  "You Win the game!!!!";
      roundResults.style.color ='green';
       optionBtn.forEach(button => {
       button.removeEventListener('click', getPlayerChoice);
     });
    }
  }

function resetGame() {
    resetBtn.addEventListener('click', () =>
    location.reload());
}


function startGame() {
    optionBtn.forEach(button => {
        button.addEventListener('click', getPlayerChoice);
    });
}


function getPlayerChoice(e) {
    playerSelection = (e.target.id)
    //playerresults.textContent = playerSelection;
    playRound(playerSelection, computerPlay())
}

/*
function game() {
    for (let i = 0; i < 5; i++){
       //console.log(playRound(playerSelection, computerPlay()));
    }
       if (PlayerScore > CompScore) {
           console.log('%c \nPlayer Wins Overall!!', 'background: green; color: purple')
           roundResults.textContent = 'Player Wins'
           roundResults.style.color = 'green';
       } else if (CompScore > PlayerScore) {
           console.log('%c \nComputer Wins Overall!!', 'background: green; color: white')
           roundResults.textContent = 'Comp Wins'
           roundResults.style.color = 'red';

       } else {
           console.log('%c \nDraw Overall!!', 'background: green; color: black')
           roundResults.textContent = 'Draw'
           roundResults.style.color = 'yellow';

       }

}
*/

// playerSelection = 'PAPEr'

// console.log(playRound(playerSelection, computerPlay()))
// console.log(playRound(playerSelection, computerPlay()))
// console.log(playRound(playerSelection, computerPlay()))
// console.log(playRound(playerSelection, computerPlay()))
// console.log(playRound(playerSelection, computerPlay()))


//game()