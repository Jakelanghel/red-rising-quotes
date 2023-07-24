export const renderTitle = (gameState) => {
  if (!gameState.gameStarted) {
    return (
      <h1 className="text-white text-center">Character Quote Challenge</h1>
    );
  } else if (!gameState.gameOver) {
    return (
      <h1 className="title text-white text-center">
        Match the quote to the character
      </h1>
    );
  } else {
    return null;
  }
};
