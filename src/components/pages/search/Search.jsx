import React from "react";
import { PuffLoader } from "react-spinners";
import { useGetCharacterQuotes } from "../../../hooks/useGetCharacterQuotes";
import { generateQuoteElements } from "./character-quote/generate-quote-elements/generateQuoteElements";
import { StyledSearch } from "./Search.Styled";
import Page from "../../shared/motion/Page";
import Title from "./title/Title";
import Subtitle from "./subtitle/Subtitle";
import SearchDropDowns from "./search-drop-downs/SearchDropDowns";

const Search = ({ allCharacters }) => {
  const { quotesData, isLoading, getCharacterQuotes } = useGetCharacterQuotes();
  const quoteElements = generateQuoteElements(quotesData);

  const renderedContent = isLoading ? (
    <div className="container-loader">
      <PuffLoader color="#991E1F" size={100} />
    </div>
  ) : (
    <div className="text-white text-center mt-5 p-1">
      <div className="container-title">
        <Title quotesData={quotesData} />
        <Subtitle quotesData={quotesData} />
      </div>

      <div className="container-quotes ">{quoteElements}</div>
    </div>
  );

  return (
    <Page>
      <StyledSearch>
        <SearchDropDowns
          allCharacters={allCharacters}
          getCharacterQuotes={getCharacterQuotes}
        />
        {renderedContent}
      </StyledSearch>
    </Page>
  );
};

export default Search;
