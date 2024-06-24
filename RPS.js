let score = JSON.parse(localStorage.getItem('score')) || {wins:0, losses:0, ties:0};

updateScoreElement();

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('Rock');
  } else if (event.key === 'p') {
    playGame('Paper');
  } else if (event.key === 's') {
    playGame('Scissors');
  }
});


function playGame(playerMove) {

  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result='You lose.';
    } else if (computerMove === 'Scissors') {
      result = 'Tie.';
    } else if (computerMove === 'Paper') {
      result = 'You win.';
    }

  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result='You win.';
    } else if (computerMove === 'Scissors') {
      result = 'You lose.';
    } else if (computerMove === 'Paper') {
      result = 'Tie.';
    }

  } else if (playerMove === 'Rock') {
      if (computerMove === 'Rock') {
        result='Tie.';
      } else if (computerMove === 'Scissors') {
        result = 'You win.';
      } else if (computerMove === 'Paper') {
        result = 'You lose.';
      }
  }

  if (result === 'You win.') {
    score.wins ++;
  } else if (result === 'You lose.') {
    score.losses++;
  } else if (result === 'Tie.') {
    score.ties ++;
  } 

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You <img src="Images/${playerMove}-emoji.png" class="move-icon">
  <img src="Images/${computerMove}-emoji.png" class="move-icon"> Computer`;

}

function updateScoreElement() {

  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`

}

function pickComputerMove() {
  
  const randomNumber = Math.random()

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber<2/3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber< 1) {
    computerMove = 'Scissors';
  }
  return computerMove;
}