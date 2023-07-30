import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NamesDropDown from "./names-drop-down/NamesDropDown";
import { Button } from "react-bootstrap";

const SearchDropDowns = ({ allCharacters, fetchData, wobble }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [length, setLength] = useState("all");
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  const handleCharacterSelect = (eventKey) => {
    setSelectedCharacter(eventKey);
    setButtonIsDisabled(false);
  };
  const handleQuantitySelect = (eventKey) => {
    setLength(eventKey);
  };

  const handleSubmit = () => {
    setButtonIsDisabled(true);

    if (selectedCharacter) {
      fetchData(
        `https://dynamic-api-proxy.onrender.com/api/red-rising/character-quotes/?slug=${selectedCharacter}&quantity=${length}`
      );
    } else {
      wobble();
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        <Dropdown
          className="character-selector"
          onSelect={handleCharacterSelect}
        >
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            className="button"
          >
            Select Character
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <NamesDropDown allCharacters={allCharacters} />
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="quantity-select" onSelect={handleQuantitySelect}>
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            className="button"
          >
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
      <Button
        disabled={buttonIsDisabled}
        onClick={handleSubmit}
        className="button"
      >
        Get Quotes
      </Button>
    </div>
  );
};

export default SearchDropDowns;
