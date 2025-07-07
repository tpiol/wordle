/*-------------- Constants -------------*/
const alphabetLetters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const squareTiles = document.querySelectorAll('.tile');
const buttons = document.querySelectorAll('.button');
const submitButton = document.querySelector('.keyboard-submit-button')
const resetButton = document.querySelector('.keyboard-reset-button')
// const howToPlay =

/*---------- Variables (state) ---------*/
let currentGuess
let allGuesses
let updateDisplay
let userChoice 
let correctSpot
let wrongPlacing
let wrongLetter
let correctWord
let hints
let gameMessage 

/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/
function initialize() {
 render();
}
  
function render () {}


function updateBoard() {}

function updateMessage () {
let correctWord = true
let wrongLetter = true
let wrongPlacing = true

for (let i = 0; i < alphabetLetters.length; i++ )
}

/*----------- Event Listeners ----------*/
for (let i = 0; i < buttons.length; i++)
buttons[i].addEventListener("click", 
    function () {
        console.log("Clicked Keyboard", buttons[i].id);
    });

submitButton.addEventListener("click", 
    function () {
        console.log("Submit Score", submitButton.id);
    });

resetButton.addEventListener("click", 
    function () {
        console.log("Reset Board", resetButton.id);
    });

initialize();
render();