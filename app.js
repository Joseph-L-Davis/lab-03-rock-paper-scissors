// import functions and grab DOM elements
// Buttons
const throwButton = document.querySelector('.throw');
const resetButton = document.querySelector('.reset');

// Other Elements
const winner = document.querySelector('.win-lose-draw');
const compThrowEl = document.querySelector('.computer-throw');
const userPoints = document.querySelector('#user-points');
const compPoints = document.querySelector('#comp-points');
const gamesPlayed = document.querySelector('#gamesPlayed')

import { getRandomThrow } from './utils';

// initialize state
let myPoints = 0;
let totalPlayed = 0;

// set event listeners to update state and DOM
throwButton.addEventListener('click', () => {
  //  Computers throw
  const randomNum = Math.random();
  const compThrow = getRandomThrow(randomNum);

  // Users throw
  const selectedThrow = document.querySelector('input:checked')
  const userThrow = selectedThrow.value;




}

