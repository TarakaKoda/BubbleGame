let timer = 60;
let score = 0;
let hitNumber;

function makeBubble() {
    const numberOFBubbles = 179;
    let bubbles = ``;
    for (let i = 0; i <= numberOFBubbles; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubble">${randomNumber}</div>`;
    }
    
    document.querySelector('.bubble-container').innerHTML = bubbles;
}
makeBubble();


function runTimer() {
    let timerInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('.timer').innerHTML = timer;
        }
        else {
            clearInterval(timerInt)
            document.querySelector('.bubble-container').innerHTML = `<div class="game-over-container">
                <h2>Game Over</h2>
                <button class="reset-btn">Play Again?</button>
            </div>`;
        }
    }, 1000)
}
runTimer();

function increaseScore() {
    score += 10;
    document.querySelector('.score').textContent = score;
}

function hit() {
    hitNumber = Math.floor(Math.random() * 10);
    document.querySelector('.hit').textContent = hitNumber;
}
hit();

function blastBubble() {
    let bubbleContainer = document.querySelector('.panel-content');
    bubbleContainer.addEventListener('click', (details) => {
        if (Number(details.target.textContent) === hitNumber) {
            increaseScore();
            makeBubble();
            hit();
        }
    })
}
blastBubble();

function resetGame() {
    document.querySelector('.bubble-container').addEventListener('click', (event) => {
        if (event.target.classList.contains('reset-btn')) {
            document.querySelector('.bubble-container').innerHTML = ``;
            score = 0;
            document.querySelector('.score').textContent = score;
            timer = 60;
            makeBubble();
            runTimer();

        }
    })
}

resetGame();