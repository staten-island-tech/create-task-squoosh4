import { validWords } from "./validWords";

maxDex = validWords.length - 1;
wordToGuess = validWords[Math.random() * maxDex];
console.log(wordToGuess);

