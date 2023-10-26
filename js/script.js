let timer = 120;
let score = 0;
let hitNumber;
let bubbleNumbers = []

function makeBubble() {
    const numberOFBubbles = 179;
    let bubbles = ``;
    for (let i = 0; i <= numberOFBubbles; i++) {
        let randomNumber = Math.floor(Math.random() * 100);
        bubbleNumbers.push(randomNumber);
        bubbles += `<div class="bubble">${randomNumber}</div>`;
    }
    
    document.querySelector('.bubble-container').innerHTML = bubbles;
    console.log(bubbleNumbers);
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

    while (true) {
        hitNumber = Math.floor(Math.random() * 100);
        if (bubbleNumbers.indexOf(hitNumber) !== -1) {
            document.querySelector('.hit').textContent = hitNumber;
            break;
        }
        console.log(hitNumber);
        console.log('Not hit');
    }
}

hit();


function blastBubble() {
    let bubbleContainer = document.querySelector('.panel-content');
    bubbleContainer.addEventListener('click', (details) => {
        if (Number(details.target.textContent) === hitNumber) {
            bubbleNumbers = [];
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
            bubbleNumbers = [];
            document.querySelector('.score').textContent = score;
            timer = 120;
            hit();
            makeBubble();
            runTimer();

        }
    })
}

resetGame();

function resetBubbles() {
    let resetBubble = document.querySelector('.reset-bubbles');
    resetBubble.addEventListener('click', () => {
        bubbleNumbers = [];
        makeBubble();
    });
}

resetBubbles();