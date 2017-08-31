var scores, roundScore, activePlayer, diceDisplay = document.querySelector('.dice');

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    diceDisplay.style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    var dice = Math.floor(Math.random() * 6) + 1;
    diceDisplay.style.display = 'block';
    diceDisplay.src = 'dice-' + dice + '.png'

    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {


    }
});

