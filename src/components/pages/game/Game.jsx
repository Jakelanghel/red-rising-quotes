import React, { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { renderGameElements } from "./render/renderGameElements";
import { renderError } from "./render/renderError";
import { renderTitle } from "./render/renderTitle";
import { StyledGame } from "./Game.Styled";
import Page from "../../shared/motion/page/Page";

const Game = ({ allCharacters }) => {
  const { data, fetchData, isLoading, apiError, apiErrorMsg } = useFetch();

  const initialState = {
    gameStarted: false,
    gameOver: false,
    length: null,
    error: false,
    selectedBook: null,
    currentQuestion: 0,
    score: 0,
  };

  const [gameState, setGameState] = useState(initialState);
  const title = renderTitle(gameState);

  const renderedContent = renderGameElements(
    isLoading,
    gameState,
    setGameState,
    fetchData,
    allCharacters,
    data
  );

  const errorMsg = renderError(gameState);

  return (
    <Page customClass="game">
      <StyledGame>
        {title}

        {renderedContent}
        {errorMsg}
      </StyledGame>
    </Page>
  );
};

export default Game;
