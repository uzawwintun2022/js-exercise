'use strict';
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;
let highscore = 0;
//document.querySelector('.number').textContent = randomNumber;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', () => {
  let guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    displayMessage('You Need To Input Number');
  } else if (guessNumber === randomNumber) {
    displayMessage('Correct Number...');
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.background = 'green';
    document.querySelector('.number').textContent = randomNumber;
  } else if (guessNumber !== randomNumber) {
    score--;
    if (score > 0) {
      guessNumber > randomNumber
        ? displayMessage('Too Hight Number...')
        : displayMessage('Too Low Number...');
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 'You Lose The Game...';
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.background = '#222';
});
