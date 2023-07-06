import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import BooksDropDown from "./books-dropdown/BooksDropDown";
import { Button } from "react-bootstrap";
import { useGetBooks } from "../../../../hooks/useGetBooks";

const GameDropDowns = (props) => {
  const { gameState, setGameState, getBookQuotes } = props;
  const allBooks = useGetBooks();

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

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        <Dropdown onSelect={handleBookSelect}>
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            className="button"
          >
            Select Book
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <BooksDropDown allBooks={allBooks} />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown onSelect={handleLengthSelect}>
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            className="button"
          >
            Select length
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey={5}>5 questions</Dropdown.Item>
            <Dropdown.Item eventKey={10}>10 questions</Dropdown.Item>
            <Dropdown.Item eventKey={15}>15 questions</Dropdown.Item>
            <Dropdown.Item eventKey={20}>20 questions</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Button onClick={startGame} className="button">
        Start Game
      </Button>
    </div>
  );
};

export default GameDropDowns;
