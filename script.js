'use strict';
/*
console.log(document.querySelector('.p1').textContent);

document.querySelector('.p1').textContent = 'Correct Number!';
document.querySelector('.qtn').textContent = '12';
document.querySelector('.score').textContent = '15';
document.querySelector('.input').value = '33';

console.log(document.querySelector('.input').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.p1').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.input').value);
  console.log(guess);

  //When there is no input
  if (!guess) {
    displayMessage('No Number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('.qtn').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.qtn').style.width = '160px';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is wrong (too high or too low)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.qtn').textContent = '?';
  document.querySelector('.input').value = '';
  displayMessage('Start Guessing...');
  document.querySelector('.qtn').style.width = '80px';
});
