/*-------------- Constants -------------*/
const alphabetLetters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
const squareTiles = document.querySelectorAll('.tile')
const keyboard = document.getElementById("game-keyboard")
// const howToPlay =

/*---------- Variables (state) ---------*/
let currentGuess
let allGuesses
let userChoice 
let updateDisplay
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
   


function updateBoard() {

}

function updateMessage () {
let correctWord = true
let wrongLetter = true
let wrongPlacing = true
let 
}

/*----------- Event Listeners ----------*/
keyboard.addEventListener("click", 
    function () {
        console.log("Clicked Keyboard")
    });

initialize();
render();