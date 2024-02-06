import { validWords } from "./modules/validWords.js";
import { DOMSelectors } from "./modules/domselectors.js";


const targetRow = 1;
const chances = 6;
const maxDex = validWords.length;
const wordToGuess = validWords[Math.floor(Math.random() * maxDex)];

console.log(wordToGuess);

function wordGuessCheckerAlg(rowToTarget) {

    let letterNum = 0;
    const correctLetters = Array.from(wordToGuess);
    const guessedLetters = Array.from(DOMSelectors.input.value);
    const target = `DOMSelectors.r${targetRow}l${letterNum + 1}`

    DOMSelectors.r1l1.innerHTML = `<p>stupid</p>`

    console.log(correctLetters);
    console.log(guessedLetters);

    for (let letterNum = 0; letterNum < 5; letterNum++) {

        if (guessedLetters[letterNum].lower === correctLetters[letterNum].lower) {

            target.innerHTML = `
                <span style="background-color: green;">${guessedLetters[letterNum]}</span>
            `
            target.style.backgroundColor = "green";

        } else if (correctLetters.contains(guessedLetters[letterNum]) === true) {

            target.innerHTML = `
                <span style="background-color: yellow;">${guessedLetters[letterNum]}</span>
            `

        } else {

            target.innerHTML = `
                <span>${guessedLetters[letterNum]}</span>
            `

        }

    }

};

DOMSelectors.submitButton.addEventListener("click", function(event){

    event.preventDefault();
    wordGuessCheckerAlg(targetRow);
    chances--;
    targetRow++;

})