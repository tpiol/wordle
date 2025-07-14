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
const validWords = [
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
    "QUEST",
    "APPLE", "BERRY", "BRAVE", "BRICK", "CHART", "CLAIM", "CLEAN", "CLOUD", "COLDY", "COAST",
    "DAILY", "DEATH", "DEPTH", "DOUBT", "DREAM", "DRIVE", "EARTH", "FAITH", "FELT", "FIELD",
    "FLAME", "FLEET", "FLOAT", "FLOUR", "FORCE", "FRAME", "FRONT", "FROST", "GLASS", "GLOBE",
    "GRACE", "GRAND", "GRASS", "GREAT", "HAPPY", "HEART", "HONEY", "HORSE", "HOUSE", "HUMOR",
    "IDEAL", "INDEX", "INPUT", "JUMBO", "JUDGE", "JUICE", "KNIFE", "KNOWS", "LARGE", "LAYER",
    "LIGHT", "LOCAL", "LOVED", "LUCKY", "MAGIC", "MARCH", "MATCH", "MIGHT", "MONEY", "MUSIC",
    "NIGHT", "NOISE", "OCEAN", "OFFER", "ORDER", "OTHER", "OWNER", "PAINT", "PEACE", "PHONE",
    "PIANO", "PLANE", "PLANT", "POINT", "POWER", "PRESS", "PRIDE", "PRICE", "PRIDE", "PRIZE",
    "QUICK", "QUIET", "RANGE", "RIVER", "ROUND", "RULES", "SCALE", "SCENE", "SCORE", "SEEDY",
    "SHARE", "SHEEP", "SHIFT", "SHINE", "SHOCK", "SHORE", "SIGHT", "SIXTY", "SKILL", "SLEEP",
    "SMALL", "SMART", "SMILE", "SMOKE", "SOUND", "SOUTH", "SPACE", "SPEAK", "SPEED", "SPEND",
    "SPICE", "SPITE", "SPORT", "STAIR", "STAKE", "STAND", "START", "STATE", "STEAM", "STEEL",
    "STICK", "STOCK", "STONE", "STORM", "STORY", "STRIP", "STUCK", "STUDY", "STUFF", "STYLE",
    "SUGAR", "SUPER", "SWEAR", "SWEET", "SWING", "TABLE", "TAKEN", "TASTE", "TEACH", "TEARS",
    "TEETH", "THANK", "THEIR", "THEME", "THINK", "THREE", "THROW", "TIGER", "TIMES", "TIRED",
    "TOUCH", "TOUGH", "TOWER", "TRACK", "TRADE", "TRAIN", "TREND", "TRICK", "TRIPY", "TRUCK",
    "TRUST", "TRUTH", "TWICE", "UNDER", "UNION", "UNITE", "UPPER", "USUAL", "VALUE", "VIDEO",
    "VISIT", "VOICE", "WATER", "WHEEL", "WHERE", "WHICH", "WHITE", "WHOLE", "WOMAN", "WORLD",
    "WORTH", "YIELD", "YOUNG", "YOUTH", "SPARE", "GHOST", "CHAIR", "FENCE",
];

console.log(howToPlay);
/*---------- Variables (state) ---------*/
let currentGuess = [];
let allGuesses = [];
let correctWord = fiveLetterWords[math.randomInt(fiveLetterWords.length)];
let tile = 0
let updateDisplay
let tileIndex = [];
let includedLetter = [];
let count = 1

/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/
function initialize() {
    currentGuess = [];
    allGuesses = [];
    correctWord = fiveLetterWords[math.randomInt(fiveLetterWords.length)];
    tile = 0;
    updateDisplay = null;
    tileIndex = [];
    includedLetter = [];
    count = 1
   
    for (let i = 0; i < squareTiles.length; i++) {
        squareTiles[i].style.transform = ''
        squareTiles[i].style.transition = ''
    }

}

function updateBoard(letter) {
    if (currentGuess.length < 5) {
        currentGuess.push(letter);
        squareTiles[tile].textContent = letter;
        tileIndex.push(tile)
        tile = tile + 1
    }
}

function checkGuess() {
    const guessWord = currentGuess.join('')
    if (!validWords.includes(guessWord)) {
        gameMessage.textContent = "Not a valid word!";
        return;
    }  else if (currentGuess.join('') === correctWord) {
        for (let i = 0; i < tileIndex.length; i++) {
            squareTiles[tileIndex[i]].style.backgroundColor = '#C4E4C2'
        }
        gameMessage.textContent = "congratulations, you have the correct word!"
    } else {
        if (count >= 6 && currentGuess.join('') !== correctWord) {
            gameMessage.textContent = `sorry you lost! the correct word is ${correctWord}`
        } else {
            gameMessage.textContent = "keep trying!"
        }
        count++
        for (let i = 0; i < currentGuess.length; i++) {
            if (correctWord[i] === currentGuess[i]) {
                includedLetter.push('#C4E4C2');
            } else if (correctWord.includes(currentGuess[i])) {
                includedLetter.push('#fff9c4');
            } else {
                includedLetter.push('#F6C4D3');
            }
        }
        for (let i = 0; i < includedLetter.length; i++) {
            squareTiles[tileIndex[i]].style.backgroundColor = includedLetter[i]
            squareTiles[tileIndex[i]].style.transform = "rotateY(360deg)"
            squareTiles[tileIndex[i]].style.transition = 'transform 1s'
        }

        usedLetters();
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
    for (let i = 0; i < squareTiles.length; i++) {
        squareTiles[i].innerText = ''
        squareTiles[i].style.backgroundColor = '#FFFFFF'
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '';
    }
    gameMessage.textContent = '';
    initialize();
}

function usedLetters() {
    const coralLetters = [];
    const greenLetters = [];
    const yellowLetters = [];
    for (let i = 0; i < squareTiles.length; i++) {
        tileColor = window.getComputedStyle(squareTiles[i]).backgroundColor;
        if (tileColor === 'rgb(196, 228, 194)') {
            greenLetters.push(squareTiles[i].textContent);
        } else if (tileColor === 'rgb(255, 249, 196)') {
            yellowLetters.push(squareTiles[i].textContent);
        } else {
            coralLetters.push(squareTiles[i].textContent);
        }
    }
    for (let i = 0; i < buttons.length; i++) {
        const letter = buttons[i].textContent
        if (greenLetters.includes(letter)) {
            buttons[i].style.backgroundColor = '#C4E4C2';
        } else if (yellowLetters.includes(letter)) {
            buttons[i].style.backgroundColor = '#fff9c4';
        } else if (coralLetters.includes(letter)) {
            buttons[i].style.backgroundColor = '#F6C4D3';
        }
    }

}

function backspace() {
    console.log(currentGuess)
    tile--
    currentGuess.pop()
    tileIndex.pop()
    squareTiles[tile].textContent = ''
}

function loadModal() {
    howToPlay.showModal();
}

function closeInstructions() {
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

