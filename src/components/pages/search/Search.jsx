import React, { useState } from "react";
import { useGetCharacterQuotes } from "../../../hooks/useGetCharacterQuotes";
import { generateQuoteElements } from "./generate-quote-elements/generateQuoteElements";

import Button from "react-bootstrap/Button";
import Title from "./title/Title";
import Subtitle from "./subtitle/Subtitle";
import SearchDropDowns from "./search-drop-downs/SearchDropDowns";

const Search = ({ allCharacters }) => {
  const { quotesData, getCharacterQuotes } = useGetCharacterQuotes();
  const quoteElements = generateQuoteElements(quotesData);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-3 gap-2">
      <SearchDropDowns
        allCharacters={allCharacters}
        getCharacterQuotes={getCharacterQuotes}
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
