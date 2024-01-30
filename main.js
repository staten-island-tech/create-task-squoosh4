import { validWords } from "./validWords";

randIntdex = validWords.length - 1;
wordToGuess = validWords[Math.random() * randIntdex];
console.log(wordToGuess);