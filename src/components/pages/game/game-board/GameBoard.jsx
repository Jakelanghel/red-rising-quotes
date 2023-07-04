import React from "react";
import { generateQuestions } from "../generate-questions/generateQuestions";

const GameBoard = ({ gameState, setGameState, allCharacters, quotesData }) => {
  const handleClick = (isCorrect) => {
    const currentQuestion = gameState.currentQuestion + 1;
    const gameOver = currentQuestion === gameState.length;

    setGameState((oldState) => ({
      ...oldState,
      gameOver,
      currentQuestion,
      score: isCorrect ? oldState.score + 1 : oldState.score,
    }));
  };

  const questionElements = generateQuestions(
    allCharacters,
    quotesData,
    handleClick
  );

  const question = questionElements
    ? questionElements[gameState.currentQuestion]
    : null;

  return <div className="text-grey text-center p-2">{question}</div>;
};

export default GameBoard;
