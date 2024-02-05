import { validWords } from "./validWords";
import { DOMSelectors } from "./domselectors";

const targetRow = 1
const maxDex = validWords.length;
const wordToGuess = validWords[Math.floor(Math.random() * maxDex)];

console.log(wordToGuess);

function wordGuessCheckerAlg(targetRow) {

    const correctLetters = Array.from(wordToGuess);
    const guessedLetters = Array.from(DOMSelectors.input.value);

    console.log(correctLetters);
    console.log(guessedLetters);

    for (let letterNum = 0; letterNum < 5; letterNum++) {
        
        const target = `r${targetRow}l${letterNum}`

        if (guessedLetters[letterNum].lower === correctLetters[letterNum].lower) {

            DOMSelectors.target.innerHTML = `
                <span style="background-color: green;">${guessedLetters[letterNum]}</span>
            `

        } else if (correctLetters.contains(guessedLetters[letterNum]) === true) {

            DOMSelectors.target.innerHTML = `
                <span style="background-color: yellow;">${guessedLetters[letterNum]}</span>
            `

        } else {

            DOMSelectors.target.innerHTML = `
                <span>${guessedLetters[letterNum]}</span>
            `

        }

    }



};

DOMSelectors.submitButton.addEventListener("click", function(event){

    event.preventDefault();
    wordGuessCheckerAlg();

})