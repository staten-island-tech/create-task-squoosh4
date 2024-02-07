import { validWords } from "./modules/validWords.js";
import { DOMSelectors } from "./modules/domselectors.js";


let targetRow = 1;
let chances = 6;
const maxDex = validWords.length;
const wordToGuess = validWords[Math.floor(Math.random() * maxDex)];

console.log(wordToGuess);

function wordGuessCheckerAlg() {

    let letterNum = 0;

    const correctWord = wordToGuess;
    const guessedWord = DOMSelectors.input.value;
    const correctLetters = Array.from(wordToGuess);
    const guessedLetters = Array.from(DOMSelectors.input.value);
    const target = document.querySelector(`#row-${targetRow}-letter-${letterNum + 1}`);

    console.log(correctWord);
    console.log(guessedWord);
    console.log(correctLetters);
    console.log(guessedLetters);
    console.log(target);

    //DOMSelectors.r1l1.innerHTML = `<p>test</p>`

    for ( let letterNum = 0; letterNum < 5; letterNum++ ) {

        const target = document.querySelector(`#row-${targetRow}-letter-${letterNum + 1}`);
        
        if (guessedLetters[letterNum] === correctLetters[letterNum]) {

            target.innerHTML = `
                <span>${guessedLetters[letterNum]}</span>
            `

            target.style.backgroundColor = "green";

        } else if (correctWord.includes(guessedLetters[letterNum]) === true) {

            target.innerHTML = `
                <span>${guessedLetters[letterNum]}</span>
            `

            target.style.backgroundColor = "yellow";

        } else {

            target.innerHTML = `
                <span>${guessedLetters[letterNum]}</span>
            `

        }

    }

    if (guessedWord === correctWord) {
        
        console.log("you win")
        DOMSelectors.body.innerHTML = `<p>you win (refresh the page to play again)</p>`

    }

};

DOMSelectors.submitButton.addEventListener("click", function(event){

    event.preventDefault();
    wordGuessCheckerAlg();
    chances--;
    targetRow++;

    if (chances === 0) {

        console.log("you lose");
        DOMSelectors.body.innerHTML = `<p> the word was ${wordToGuess} you lose (refresh the page to play again)</p>`;

    }

})