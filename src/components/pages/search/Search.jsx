import React, { useState } from "react";
import { useGetCharacterQuotes } from "../../../hooks/useGetCharacterQuotes";
import { generateQuoteElements } from "./generate-quote-elements/generateQuoteElements";

import Button from "react-bootstrap/Button";
import Title from "./title/Title";
import Subtitle from "./subtitle/Subtitle";
import SearchDropDowns from "./search-drop-downs/SearchDropDowns";

const Search = (props) => {
  const { allCharacters } = props;
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

  const quoteElements = generateQuoteElements(quotesData);

  return (
    <div className="search d-flex flex-column justify-content-center align-items-center p-3 gap-2">
      <SearchDropDowns
        allCharacters={allCharacters}
        handleCharacterSelect={handleCharacterSelect}
        handleQuantitySelect={handleQuantitySelect}
      />

      <Button onClick={handleSubmit}>Get Quotes</Button>

      <div className="text-white text-center mt-4">
        <Title quotesData={quotesData} />
        <Subtitle quotesData={quotesData} />

        <div className="container-quote d-flex flex-column gap-5">
          {quoteElements}
        </div>
      </div>
    </div>
  );
};

export default Search;
