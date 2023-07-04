import React, { useState } from "react";
import { useGetBookQuotes } from "../../../hooks/useGetBookQuotes";
import GameDropDowns from "./game-drop-downs/GameDropDowns";
import GameBoard from "./game-board/GameBoard";
import GameOver from "./game-over/GameOver";

const Game = ({ allCharacters }) => {
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

  const renderedElements = !gameState.gameStarted ? (
    <GameDropDowns
      gameState={gameState}
      setGameState={setGameState}
      getBookQuotes={getBookQuotes}
    />
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

  const errorMsg =
    gameState.error === true ? (
      <h2 className="text-grey fs-5 text-center mt-4">
        Please select a book and length of quiz to begin.
      </h2>
    ) : null;

  const title = !gameState.gameStarted
    ? "Character Quote Challenge"
    : "Match the quote to the character";

  return (
    <>
      <h1 className="text-white text-center mt-4">{title}</h1>
      <div className="d-flex flex-column justify-content-center align-items-center gap-2">
        {renderedElements}
        {errorMsg}
      </div>
    </>
  );
};

export default Game;
