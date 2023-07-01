import React, { useState } from "react";
import { useGetBooks } from "../../../hooks/useGetBooks";
import GameDropDowns from "./game-drop-downs/GameDropDowns";

const Game = (props) => {
  const { allCharacter } = props;
  const allBooks = useGetBooks();
  const [selectedBook, setSelectedBook] = useState(null);
  const [length, setLength] = useState(null);

  const handleBookSelect = (eventKey) => {
    setSelectedBook(eventKey);
  };
  const handleLengthSelect = (eventKey) => {
    setLength(eventKey);
  };

  return (
    <div>
      <h1 className="text-white text-center mt-4">Character Quote Challenge</h1>
      <div className="search d-flex flex-row justify-content-center align-items-center p-3 gap-2">
        <GameDropDowns
          allBooks={allBooks}
          handleBookSelect={handleBookSelect}
          handleLengthSelect={handleLengthSelect}
        />
      </div>
    </div>
  );
};

export default Game;
