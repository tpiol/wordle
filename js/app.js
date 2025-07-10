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
let tileIndex = [];
let includedLetter = [];
let count = 1

/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/
function initialize() {
    currentGuess = [];
    allGuesses = [];
    correctWord = 'QUEST';
    tile
    updateDisplay = null;
    answer
    tileIndex = [];
    includedLetter = [];
    count = 1
    console.log(tile)
}

function updateBoard(letter) {
    if (currentGuess.length < 5) {
        currentGuess.push(letter);
        squareTiles[tile].textContent = letter;
        tileIndex.push(tile)
        tile = tile + 1
        console.log(tileIndex)
    }
}

function checkGuess() {
    if (currentGuess.join('') === correctWord) {
        for (let i = 0; i < tileIndex.length; i++) {
            squareTiles[tileIndex[i]].style.backgroundColor = 'green'
        }
        gameMessage.textContent = "Congratulations, you have the correct word!"
    } else {
        if (count >= 6 && currentGuess.join('') !== correctWord) {
            gameMessage.textContent = "Sorry you lost!"
        } else {
            gameMessage.textContent = "Keep Trying!"
        }
        count++
        for (let i = 0; i < currentGuess.length; i++) {
            if (correctWord[i] === currentGuess[i]) {

                includedLetter.push('green');
            } else if (correctWord.includes(currentGuess[i])) {
                includedLetter.push('yellow');
            } else {
                includedLetter.push('red');
            }
        }
        for (let i = 0; i < includedLetter.length; i++) {
            squareTiles[tileIndex[i]].style.backgroundColor = includedLetter[i]
        }

        currentGuess = [];
        tileIndex = []
        includedLetter = [];
        console.log(includedLetter)
        return includedLetter;
    }
}

function clickLetter(event) {
    const letter = event.target.textContent;
    console.log(event.target)
    updateBoard(letter);
}

// function reset() {
//     for (let i = 0; i < tileIndex.length; i++) {
//         console.log(squareTiles)
//         squareTiles[tileIndex[i]].textContent = ''
//     }
//     tile = tileIndex[0]
//     includedLetter = []
//     tileIndex = []
//     console.log(reset)
// }

/*----------- Event Listeners ----------*/
for (let i = 0; i < buttons.length; i++)
    buttons[i].addEventListener("click",
        clickLetter
    );

submitButton.addEventListener("click", checkGuess);

resetButton.addEventListener("click", initialize);

initialize();
