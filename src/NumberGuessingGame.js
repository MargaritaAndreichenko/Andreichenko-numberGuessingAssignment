import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

const MAX_ATTEMPTS = 5;

const NumberGuessingGame = () => {

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  
  };
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
  console.log(numberToGuess)
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  const handleGuess = (guess) => {
    setLatestGuess(guess);
    setNumberOfGuesses(prevNumberOfGuesses => prevNumberOfGuesses + 1);
  };

  const handleReset = () => {
    setNumberToGuess(getRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess(null);
  }

  const isCorrectGuess = latestGuess === numberToGuess;
  const isGameOver =
    isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      {!isGameOver && (
        <GuessControl onGuess={handleGuess} />
      )}
      {isGameOver && (
        <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
      )}
      {!isGameOver && (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
};

export default NumberGuessingGame;
