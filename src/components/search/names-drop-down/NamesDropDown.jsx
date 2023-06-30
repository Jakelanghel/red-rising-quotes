import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { nanoid } from "nanoid";

const NamesDropDown = (allCharacters) => {
  const characterNames = allCharacters.allCharacters;

  if (characterNames) {
    return characterNames.map((character) => {
      return (
        <Dropdown.Item eventKey={character.slug} key={nanoid()}>
          {character.name}
        </Dropdown.Item>
      );
    });
  } else {
    return null;
  }
};

export default NamesDropDown;
