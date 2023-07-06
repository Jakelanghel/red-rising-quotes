import React from "react";
import { useGetCharacterQuotes } from "../../../hooks/useGetCharacterQuotes";
import { generateQuoteElements } from "./generate-quote-elements/generateQuoteElements";

import Page from "../../shared/motion/Page";
import Title from "./title/Title";
import Subtitle from "./subtitle/Subtitle";
import SearchDropDowns from "./search-drop-downs/SearchDropDowns";

const Search = ({ allCharacters }) => {
  const { quotesData, getCharacterQuotes } = useGetCharacterQuotes();
  const quoteElements = generateQuoteElements(quotesData);

  return (
    <Page>
      <SearchDropDowns
        allCharacters={allCharacters}
        getCharacterQuotes={getCharacterQuotes}
      />

      <div className="text-white text-center mt-4">
        <Title quotesData={quotesData} />
        <Subtitle quotesData={quotesData} />

        <div className="container-quote d-flex flex-column gap-5">
          {quoteElements}
        </div>
      </div>
    </Page>
  );
};

export default Search;
