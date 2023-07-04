import React, { useState } from "react";
import { generateQuestions } from "../generate-questions/generateQuestions";

const GameBoard = (props) => {
  const { gameState, setGameState, allCharacters, quotesData } = props;

  const handleClick = (isCorrect) => {
    const currentQuestion = gameState.currentQuestion + 1;
    const gameOver = currentQuestion === gameState.length ? true : false;

    if (isCorrect) {
      setGameState((oldState) => {
        const newState = {
          ...oldState,
          gameOver: gameOver,
          currentQuestion: currentQuestion,
          score: oldState.score + 1,
        };
        return newState;
      });
    } else {
      setGameState((oldState) => {
        const newState = {
          ...oldState,
          gameOver: gameOver,
          currentQuestion: currentQuestion,
        };
        return newState;
      });
    }
  };

  const questionElements = generateQuestions(
    allCharacters,
    quotesData,
    handleClick
  );

  const question = questionElements
    ? questionElements[gameState.currentQuestion]
    : null;

  return (
    <div className="text-grey text-center p-2">
      <h2 className="fs-4 mt-4">Match the quote to the character.</h2>
      {question}
    </div>
  );
};

export default GameBoard;
