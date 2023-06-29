import React, { useState } from "react";
import { useGetCharacterNames } from "../../hooks/useGetCharacterNames";
import { useGetCharacterQuotes } from "../../hooks/useGetCharacterQuotes";
import { nanoid } from "nanoid";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import CharacterQuote from "./character-quote/CharacterQuote";

const Search = () => {
  const characters = useGetCharacterNames();
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const { quotesData, getCharacterQuotes } = useGetCharacterQuotes();

  console.log(quotesData);

  const handleCharacterSelect = (eventKey) => {
    setSelectedCharacter(eventKey);
  };
  const handleQuantitySelect = (eventKey) => {
    setQuantity(eventKey);
  };

  const handleSubmit = () => {
    if (selectedCharacter) {
      getCharacterQuotes(selectedCharacter, quantity);
    } else {
      console.log("Please select a character");
    }
  };

  const characterNameElements = characters.map((character) => {
    return (
      <Dropdown.Item eventKey={character.slug} key={nanoid()}>
        {character.name}
      </Dropdown.Item>
    );
  });

  const quoteElements = quotesData
    ? quotesData.quotes.map((quote) => (
        <CharacterQuote quoteData={quote} key={nanoid()} />
      ))
    : null;

  const title = quotesData ? (
    <h1 className="fs-1 mt-2">{quotesData.name}</h1>
  ) : (
    <h1 className="fs-4 mt-2">
      Select a characters name and the number of quotes you want to fetch.
    </h1>
  );

  const subtitle = quotesData ? (
    <h2 className="fs-6 mt-2">{quotesData.description}</h2>
  ) : (
    <h2 className="fs-6 mt-2">
      If no quantity is selected all quotes for that character will be fetched.
    </h2>
  );

  return (
    <div className="search d-flex flex-column justify-content-center align-items-center p-3 gap-2">
      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        <Dropdown
          className="character-selector"
          onSelect={handleCharacterSelect}
        >
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Select Character
          </Dropdown.Toggle>

          <Dropdown.Menu>{characterNameElements}</Dropdown.Menu>
        </Dropdown>

        <Dropdown className="quantity-select" onSelect={handleQuantitySelect}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Select Quantity
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey={1}>1</Dropdown.Item>
            <Dropdown.Item eventKey={2}>2</Dropdown.Item>
            <Dropdown.Item eventKey={3}>3</Dropdown.Item>
            <Dropdown.Item eventKey={4}>4</Dropdown.Item>
            <Dropdown.Item eventKey={5}>5</Dropdown.Item>
            <Dropdown.Item eventKey="all">All</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Button onClick={handleSubmit}>Get Quotes</Button>

      <div className="container-quote text-white text-center mt-4">
        {title}
        {subtitle}
        {quoteElements}
      </div>
    </div>
  );
};

export default Search;
