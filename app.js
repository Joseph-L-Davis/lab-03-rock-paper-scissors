// Created dev branch !
// import functions and grab DOM elements
// Buttons
const throwButton = document.querySelector('.throw');
const resetButton = document.querySelector('.reset');

// Other Elements

const winner = document.querySelector('.winner');
const userPoints = document.querySelector('#user-points');
const lossesEl = document.querySelector('#loss-points');
const gamesPlayed = document.querySelector('#gamesPlayed');
const resets = document.querySelector('.resets');

import { getRandomThrow, doesUserWin } from './utils.js';

// initialize state
let myPoints = 0;
let losses = 0;
let totalPlayed = 0;
let numOfResets = 0;

// set event listeners to update state and DOM
throwButton.addEventListener('click', () => {       
    totalPlayed++;  
    const selectedThrow = document.querySelector('input:checked');
    const userThrow = selectedThrow.value;

  //  Computers throw
    const randomNum = Math.random();
    const compThrow = getRandomThrow(randomNum);
    
    switch (doesUserWin(userThrow, compThrow)) {
        case 'win':
            winner.textContent = 'YOU WON';
            myPoints++;
            break;

        case 'lose':
            winner.textContent = 'YOU LOSE';
            losses++;
            break;

        case 'draw':
            winner.textContent = 'ITS A DRAW';
            break;
    }
    userPoints.textContent = myPoints;
    gamesPlayed.textContent = totalPlayed;
    lossesEl.textContent = losses;

});

resetButton.addEventListener('click', () => {
    numOfResets++;
    myPoints = 0;
    totalPlayed = 0;
    losses = 0;
    userPoints.textContent = 0;
    gamesPlayed.textContent = 0;
    lossesEl.textContent = 0;
    winner.textContent = 'CHOOSE WISELY';
    resets.textContent = numOfResets;

});


