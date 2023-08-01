import React from "react";
import { Button } from "react-bootstrap";
import { StyledGameOver } from "./GameOver.Styled";
import { fadeInVariants } from "../../../shared/fadeInVariants";

const GameOver = ({ score, length, setGameState }) => {
  const handelClick = () => {
    const reset = {
      gameStarted: false,
      gameOver: false,
      length: null,
      error: false,
      selectedBook: null,
      currentQuestion: 0,
      score: 0,
    };
    setGameState(reset);
  };

  return (
    <StyledGameOver
      variants={fadeInVariants}
      initial="initial"
      animate="animate"
    >
      <h1>Game Over</h1>
      <h2>
        Score : <span className="score">{score}</span> /
        <span className="total"> {length}</span>
      </h2>
      <Button onClick={handelClick} className="button m-4">
        Start New Quiz
      </Button>
    </StyledGameOver>
  );
};

export default GameOver;
