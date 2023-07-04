import React, { useState } from "react";
import { useGetBooks } from "../../../hooks/useGetBooks";
import { useGetBookQuotes } from "../../../hooks/useGetBookQuotes";
import GameDropDowns from "./game-drop-downs/GameDropDowns";
import Button from "react-bootstrap/Button";
import GameBoard from "./game-board/GameBoard";
import GameOver from "./game-over/GameOver";

const Game = (props) => {
  const { allCharacters } = props;
  const allBooks = useGetBooks();
  const { quotesData, getBookQuotes } = useGetBookQuotes();

  const [gameState, setGameState] = useState({
    gameStarted: false,
    gameOver: false,
    length: null,
    error: false,
    selectedBook: null,
    currentQuestion: 0,
    score: 0,
  });

  const handleBookSelect = (eventKey) => {
    setGameState((oldState) => ({ ...oldState, selectedBook: eventKey }));
  };

  const handleLengthSelect = (eventKey) => {
    const length = parseInt(eventKey);
    setGameState((oldState) => ({ ...oldState, length: length }));
  };

  const startGame = () => {
    if (gameState.selectedBook && gameState.length) {
      getBookQuotes(gameState.selectedBook, gameState.length);
      setGameState((oldState) => ({
        ...oldState,
        error: false,
        gameStarted: true,
      }));
    } else {
      setGameState((oldState) => ({
        ...oldState,
        error: true,
      }));
    }
  };

  const renderedElements = !gameState.gameStarted ? (
    <>
      <GameDropDowns
        allBooks={allBooks}
        handleBookSelect={handleBookSelect}
        handleLengthSelect={handleLengthSelect}
      />
      <Button onClick={startGame}>Start Game</Button>
    </>
  ) : !gameState.gameOver ? (
    <GameBoard
      gameState={gameState}
      setGameState={setGameState}
      allCharacters={allCharacters}
      quotesData={quotesData}
    />
  ) : (
    <GameOver
      score={gameState.score}
      length={gameState.length}
      setGameState={setGameState}
    />
  );

  const errorMsg = gameState.error ? (
    <h2 className="text-grey fs-5 text-center mt-4">
      Please select a book and length of quiz to beguin.
    </h2>
  ) : null;

  return (
    <div className="">
      <h1 className="text-white text-center mt-4">Character Quote Challenge</h1>
      <div className="d-flex flex-column justify-content-center align-items-center gap-2">
        {renderedElements}
        {errorMsg}
      </div>
    </div>
  );
};

export default Game;
