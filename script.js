'use strict'

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

// Buttons
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

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

    diceEl.classList.add('hidden');
};

initGame();

const switchPlayer = function () {
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

btnRollDice.addEventListener('click', function (){
    if (gameRunning){
        let dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.src = `dice-${dice}.png`
        diceEl.classList.remove('hidden');

        if (dice !== 1){
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});