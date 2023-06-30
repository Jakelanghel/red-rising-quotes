import React, { useState } from "react";
import { useGetCharacterNames } from "../../hooks/useGetCharacterNames";
import { useGetCharacterQuotes } from "../../hooks/useGetCharacterQuotes";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Title from "./title/Title";
import Subtitle from "./subtitle/Subtitle";
import NamesDropDown from "./names-drop-down/NamesDropDown";
import QuoteElements from "./quote-elements/QuoteElemens";

const Search = () => {
  const allCharacters = useGetCharacterNames();
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const { quotesData, getCharacterQuotes } = useGetCharacterQuotes();

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

          <Dropdown.Menu>
            <NamesDropDown allCharacters={allCharacters} />
          </Dropdown.Menu>
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
        <Title quoteData={quotesData} />
        <Subtitle quoteData={quotesData} />
        <QuoteElements />
      </div>
    </div>
  );
};

export default Search;
