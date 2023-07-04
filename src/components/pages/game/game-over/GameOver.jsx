import React from "react";
import { Button } from "react-bootstrap";

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
    <div className="text-white text-center mt-4">
      <h1>Game Over</h1>
      <h2>
        You scored a {score} out of {length}
      </h2>
      <Button onClick={handelClick}>Start New Quiz</Button>
    </div>
  );
};

export default GameOver;
