import React from "react";
import { Button } from "react-bootstrap";
import { StyledGameOver } from "./GameOver.Styled";
import { fadeInVariant } from "../../../shared/motion/fadeInVariants";

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
      variants={fadeInVariant}
      initial="initial"
      animate="animate"
    >
      <h1>Game Over</h1>
      <h2>
        You scored a <span className="score">{score}</span> out of
        <span className="score"> {length}</span>
      </h2>
      <Button onClick={handelClick} className="button m-4">
        Start New Quiz
      </Button>
    </StyledGameOver>
  );
};

export default GameOver;
