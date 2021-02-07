'use strict';

const feedbackDisplay = document.querySelector('.fback');
const input = document.querySelector('.input');
const hiddenNumberDisplay = document.querySelector('.qtn');
const highScoreDisplay = document.querySelector('.highscore');
const guessesLeftDisplay = document.querySelector('.guesses-left');
const playAgainBtn = document.querySelector('.play-again');
const guessBtn = document.querySelector('.check');

let secretNumber = Math.trunc(Math.random() * 99) + 1;
let score = 20; //state variable
let highScore = 0;

const displayMessage = function (message) {
  feedbackDisplay.textContent = message;
};

const init = function () {
  secretNumber = Math.trunc(Math.random() * 99) + 1;
  score = 20;
  guessesLeftDisplay.textContent = score;
  hiddenNumberDisplay.textContent = '?';
  hiddenNumberDisplay.style.backgroundColor = '#473567';
  hiddenNumberDisplay.style.color = '#634d8b';
  input.value = '';
  guessBtn.addEventListener('click', guessBehaviour);
  displayMessage('Start Guessing...');
};

const guessBehaviour = function () {
  if (input.value !== '') {
    const guess = Number(input.value);

    //When there is no input
    if (guess <= 0) {
      displayMessage('Invalid Guess! (1 - 99)');

      //When player wins
    } else if (guess === secretNumber) {
      displayMessage('Correct Number :)');
      hiddenNumberDisplay.textContent = secretNumber;
      hiddenNumberDisplay.style.backgroundColor = '#60b347';
      hiddenNumberDisplay.style.color = '#fff';

      if (score > highScore) {
        highScore = score;
        highScoreDisplay.textContent = highScore;
      }

      guessBtn.removeEventListener('click', guessBehaviour);

      //When guess is wrong (too high or too low)
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
        score--;
        guessesLeftDisplay.textContent = score;
      } else {
        displayMessage('Game Over!');
        guessesLeftDisplay.textContent = 0;
      }
    }
    //When there is no input (ie.. user has not put in anything, The guess button should be unclickable)
  } else {
    displayMessage('No Number!');
  }
};

guessBtn.addEventListener('click', guessBehaviour);

playAgainBtn.addEventListener('click', init);
