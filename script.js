'use strict'

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

// Initialize values
let score, currentScore, gameRunning, activePlayer;

const initGame = function(){
    score = [0,0];
    currentScore = 0;
    activePlayer = 0;
    gameRunning = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
};

initGame();