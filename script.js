'use strict';
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');
let scores, currentscore, activeplayer, playing;
const init = function () {
    scores = [0, 0];
    currentscore = 0;
    activeplayer = 0;
    playing = true;
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');

}
init();
const switchPlayer = function () {
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentscore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6 + 1);
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        console.log(dice);
        if (dice != 1) {
            currentscore += dice;
            document.getElementById(`current--${activeplayer}`).textContent = currentscore;
        }
        else {
            switchPlayer();
        }
    }

})
btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activeplayer] += currentscore;
        document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];
        if (scores[activeplayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        }
        else {
            switchPlayer();
        }
    }
})
btnNew.addEventListener('click', init);