import { validWords } from "./validWords";
import { DOMSelectors } from "./domselectors";

const targetRow = 1
const targetLetter = 1
const maxDex = validWords.length;
wordToGuess = validWords[Math.floor(Math.random() * maxDex)];
console.log(wordToGuess);

function wordGuessCheckerAlg(targetRow) {

    const correctLetters = Array.from(wordToGuess);
    const guessedLetters = Array.from(DOMSelectors.input.value)
    console.log(correctLetters);
    console.log(guessedLetters);

    for (let letterNum = 0; letterNum < 5; letterNum++) {
        
        if (guessedLetters[letterNum].lower === correctLetters[letterNum].lower){
            DOMSelectors.(`r1l + ${letterNum}`)
        }

    }



};

DOMSelectors.submitButton.addEventListener("click", function(event){

    event.preventDefault();
    wordGuessCheckerAlg()

})