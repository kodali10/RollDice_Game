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

        nextPlayer();
    }


});

function nextPlayer() {
    //clear current score
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    //change player on backend player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //Change player on front end
    /*document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
    */
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none'
}