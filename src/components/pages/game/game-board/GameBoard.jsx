import React from "react";
import { generateQuestions } from "../generate-questions/generateQuestions";
import { StyledGameBoard } from "./GameBoard.Styled";

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

  return (
    <StyledGameBoard className="text-grey text-center p-2">
      {question}
    </StyledGameBoard>
  );
};

export default GameBoard;
