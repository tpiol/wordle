/*-------------- Constants -------------*/
const alphabetLetters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const squareTiles = document.querySelectorAll('.tile');
const buttons = document.querySelectorAll('.button');
const submitButton = document.querySelector('#submit')
const resetButton = document.querySelector('#reset')
const gameMessage = document.querySelector('#message')
// const howToPlay =

/*---------- Variables (state) ---------*/
let currentGuess = [];
let allGuesses = [];
let correctWord = 'QUEST';
let tile = 0
let updateDisplay
let answer

/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/
function initialize() {
    currentGuess = [];
    allGuesses = [];
    correctWord = 'QUEST';
    tile = 0;
    updateDisplay = null;
    render();
    console.log(tile)
}

function updateBoard(letter) {
    if (currentGuess.length < 5) {
        currentGuess.push(letter);
        squareTiles[tile].textContent = letter;
        tile = tile + 1
    }
}


function checkGuess() {
    if (currentGuess.join('') === correctWord) {
        gameMessage.textContent = "Congratulations, you have the correct word!"
    } else {
        gameMessage.textContent = "Keep Trying!"
        let includedLetter = [];
        for (let i = 0; i < currentGuess.length; i++) {
            if (correctWord[i] === currentGuess[i]) {
                squareTiles.style.backgrounColor = "green";
            } else if (correctWord.includes(currentGuess[i])) {
                includedLetter.push('yellow');
            } else {
                includedLetter.push('red');
            }
        }
        currentGuess = [];
        console.log(includedLetter)
        return includedLetter;
    }
}

function clickLetter(event) {
    const letter = event.target.textContent;
    updateBoard(letter);
}

function render() {
}

/*----------- Event Listeners ----------*/
for (let i = 0; i < buttons.length; i++)
    buttons[i].addEventListener("click",
        clickLetter
    );

submitButton.addEventListener("click", checkGuess
);

resetButton.addEventListener("click", initialize);

initialize();
render();