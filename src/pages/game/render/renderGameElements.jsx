import { PuffLoader } from "react-spinners";
import GameDropDowns from "../game-drop-downs/GameDropDowns";
import GameBoard from "../game-board/GameBoard";
import GameOver from "../game-over/GameOver";

export const renderGameElements = (
  isLoading,
  gameState,
  setGameState,
  fetchData,
  allCharacters,
  data
) => {
  if (isLoading) {
    return <PuffLoader color="#991E1F" size={100} className="loader" />;
  } else if (!gameState.gameStarted) {
    return (
      <GameDropDowns
        gameState={gameState}
        setGameState={setGameState}
        fetchData={fetchData}
      />
    );
  } else if (!gameState.gameOver) {
    return (
      <GameBoard
        gameState={gameState}
        setGameState={setGameState}
        allCharacters={allCharacters}
        quotesData={data}
      />
    );
  } else {
    return (
      <GameOver
        score={gameState.score}
        length={gameState.length}
        setGameState={setGameState}
      />
    );
  }
};
