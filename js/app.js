/*-------------- Constants -------------*/
const alphabetLetters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const squareTiles = document.querySelectorAll('.tile');
const buttons = document.querySelectorAll('.button');
const submitButton = document.querySelector('#submit')
const resetButton = document.querySelector('#reset')
const backspaceButton = document.querySelector('#backspace')
const playButton = document.querySelector('#playButton')
const gameMessage = document.querySelector('#message')
const howToPlay = document.querySelector('#game-instructions')
const fiveLetterWords = [
    "CRANE", "BLINK", "SHOUT", "DRIVE", "STAMP", "PLANE", "CHORD", "TIGER", "WORST", "MIGHT",
    "CLOVE", "BRAND", "GLINT", "SWEAR", "CHIEF", "TRUNK", "JUMPY", "QUICK", "ZEBRA", "VIXEN",
    "ADORE", "WHELP", "FROST", "CHALK", "GLOVE", "HUMID", "DANCE", "SPLIT", "FABLE", "WORRY",
    "MOUNT", "QUEST", "BLAZE", "VOUCH", "GRIND", "THROW", "JOKER", "PRONG", "VIRAL", "SCARE",
    "BLAST", "FRONT", "CUBED", "KITES", "DRANK", "GLARE", "PUNCH", "MIRTH", "CROWN", "SLOPE",
    "VAULT", "WHINE", "ZONED", "EXALT", "TRAIL", "GAMER", "FIGHT", "JUMPS", "SWORD", "NERVE",
    "QUIET", "YIELD", "CARGO", "SPEND", "FLOAT", "DEALT", "PRINT", "SHOCK", "LOVED", "BANKS",
    "TREND", "ZAPPY", "GHOST", "VAPID", "LUNCH", "WORMS", "REACT", "MONEY", "FIXED", "SQUAD",
    "NOBLE", "DRYLY", "PLUSH", "CHINA", "TANGO", "WACKY", "MIXED", "BROWN", "JOLLY", "TWEAK",
    "DAIRY", "CAMPY", "VOTER", "PRISM", "GLUED", "TOKEN", "FLOOD", "RANGE", "CHEST", "LUCKY",
    "QUEST"
];

console.log(howToPlay);
/*---------- Variables (state) ---------*/
let currentGuess = [];
let allGuesses = [];
let correctWord = fiveLetterWords[math.randomInt(fiveLetterWords.length)];
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
    correctWord = fiveLetterWords[math.randomInt(fiveLetterWords.length)];
    console.log('the correct word is ', correctWord);
    tile = 0;
    updateDisplay = null;
    answer
    tileIndex = [];
    includedLetter = [];
    count = 1
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
            gameMessage.textContent = `Sorry you lost! The correct word is ${correctWord}`
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
                includedLetter.push('gray');
            }
        }
        for (let i = 0; i < includedLetter.length; i++) {
            squareTiles[tileIndex[i]].style.backgroundColor = includedLetter[i]
            console.log(squareTiles[tileIndex[i]])
        }

        currentGuess = [];
        tileIndex = []
        includedLetter = [];
        return includedLetter;
    }
}

function clickLetter(event) {
    const letter = event.target.textContent;
    updateBoard(letter);
}

function reset() {
    console.log('this is working')
    for (let i = 0; i < squareTiles.length; i++) {
        squareTiles[i].innerText = ''
        squareTiles[i].style.backgroundColor = 'pink'
    }
    initialize();
}

function backspace() {
    console.log(currentGuess)
    tile--
    currentGuess.pop()
    tileIndex.pop()
    squareTiles[tile].textContent = ''
    console.log(currentGuess)
    console.log(includedLetter)
    console.log(squareTiles)
}

function loadModal () {
    howToPlay.showModal();
}

function closeInstructions () {
    howToPlay.close();
    initialize();
}

/*----------- Event Listeners ----------*/
for (let i = 0; i < buttons.length; i++)
    buttons[i].addEventListener("click",
        clickLetter
    );

document.addEventListener("DOMContentLoaded", loadModal);

playButton.addEventListener("click", closeInstructions)

submitButton.addEventListener("click", checkGuess);

resetButton.addEventListener("click", reset);

backspaceButton.addEventListener("click", backspace)

