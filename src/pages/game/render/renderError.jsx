export const renderError = (gameState) => {
  if (gameState.error) {
    return (
      <h2 className="text-grey fs-5 text-center mt-4">
        Please select a book and length of quiz to begin.
      </h2>
    );
  } else {
    return null;
  }
};
