import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NamesDropDown from "./names-drop-down/NamesDropDown";
import { Button } from "react-bootstrap";

const SearchDropDowns = ({ allCharacters, getCharacterQuotes }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [length, setLength] = useState(0);

  const handleCharacterSelect = (eventKey) => {
    setSelectedCharacter(eventKey);
  };
  const handleQuantitySelect = (eventKey) => {
    setLength(eventKey);
  };

  const handleSubmit = () => {
    if (selectedCharacter) {
      getCharacterQuotes(selectedCharacter, length);
    } else {
      console.log("Please select a character");
    }
  };

  return (
    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
      <Dropdown className="character-selector" onSelect={handleCharacterSelect}>
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

      <Button onClick={handleSubmit}>Get Quotes</Button>
    </div>
  );
};

export default SearchDropDowns;
