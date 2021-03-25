// import functions and grab DOM elements
// Buttons
const throwButton = document.querySelector('.throw');
const resetButton = document.querySelector('.reset');

// Other Elements
const winner = document.querySelector('.win-lose-draw');
const userPoints = document.querySelector('#user-points');
const lossesEl = document.querySelector('#loss-points');
const gamesPlayed = document.querySelector('#gamesPlayed');

import { getRandomThrow } from './utils.js';

// initialize state
let myPoints = 0;
let losses = 0;
let totalPlayed = 0;

// set event listeners to update state and DOM
throwButton.addEventListener('click', () => {
  //  Computers throw
    const randomNum = Math.random();
    const compThrow = getRandomThrow(randomNum);
    console.log(compThrow);

  // Users throw
    const selectedThrow = document.querySelector('input:checked');
    const userThrow = selectedThrow.value;

    totalPlayed++;

    if (userThrow === compThrow) {

        winner.textContent = 'ITS A DRAW';
    } else if (userThrow === 'rock' && compThrow !== 'paper') {
        myPoints++;
        winner.textContent = 'YOU WON!';
    } else if (userThrow === 'rock' && compThrow === 'paper') {
        losses++;
        winner.textContent = 'COMPUTER WON';
    } else if (userThrow === 'paper' && compThrow !== 'scissors') {
        myPoints++;
        winner.textContent = 'YOU WON!';
    } else if (userThrow === 'paper' && compThrow === 'scissors') {
        losses++;
        winner.textContent = 'COMPUTER WON';
    } else if (userThrow === 'scissors' && compThrow !== 'rock') {
        myPoints++;
        winner.textContent = 'YOU WON!';
    } else if (userThrow === 'scissors' && compThrow === 'rock') {
        losses++;
        winner.textContent = 'COMPUTER WON!';
    }

    userPoints.textContent = myPoints;
    gamesPlayed.textContent = totalPlayed;
    lossesEl.textContent = losses;
});

resetButton.addEventListener('click', () => {
    userPoints.textContent = 0;
    gamesPlayed.textContent = 0;
    lossesEl.textContent = 0;
    winner.textContent = 'CHOOSE WISELY';
});