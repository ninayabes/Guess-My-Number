'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage(' INVALID ENTRY!');
    document.querySelector('.message').style.fontSize = '3rem';
    document.querySelector('.message').style.color = '#8E0707';
  } else if (guess === secretNumber) {
    displayMessage('YOU WIN!');
    document.querySelector('.message').style.fontSize = '3rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#078E52';
    document.querySelector('.message').style.color = '#FFDF00';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('.message').style.fontSize = '3rem';
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? ' TOO HIGH!' : ' TOO LOW!');
      document.querySelector('.message').style.color = '#8E0707';
      document.querySelector('.message').style.fontSize = '3rem';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('YOU LOST!');
      document.querySelector('.message').style.fontSize = '3rem';
      document.querySelector('.message').style.color = '#8E0707';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.message').style.fontSize = '2rem';
  document.querySelector('.message').style.color = '#eee';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
