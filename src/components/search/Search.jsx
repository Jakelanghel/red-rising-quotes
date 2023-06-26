import React, { useState } from "react";
import { useGetCharacterNames } from "../../hooks/useGetCharacterNames";
import { useGetCharacterQuote } from "../../hooks/useGetCharacterQuote";
import { nanoid } from "nanoid";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const Search = () => {
  const characters = useGetCharacterNames();
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const handleCharacterSelect = (eventKey) => {
    setSelectedCharacter(eventKey);
  };
  const handleQuantitySelect = (eventKey) => {
    setQuantity(eventKey);
  };

  const characterElements = characters.map((character) => {
    return (
      <Dropdown.Item eventKey={character.slug} key={nanoid()}>
        {character.name}
      </Dropdown.Item>
    );
  });

  const handleSubmit = () => {
    console.log(selectedCharacter, quantity);
  };

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

          <Dropdown.Menu>{characterElements}</Dropdown.Menu>
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
    </div>
  );
};

export default Search;
