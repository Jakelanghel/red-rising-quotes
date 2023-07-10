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
    <div className="text-white text-center mt-5">
      <h1 className="txt-red">Game Over</h1>
      <h2>
        You scored a <span className="text-red">{score}</span> out of{" "}
        <span className="text-red">{length}</span>
      </h2>
      <Button onClick={handelClick} className="button m-4">
        Start New Quiz
      </Button>
    </div>
  );
};

export default GameOver;
