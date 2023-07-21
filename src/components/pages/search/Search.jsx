import React from "react";
import { PuffLoader } from "react-spinners";
import { useFetch } from "../../../hooks/useFetch";
import { generateQuoteElements } from "./character-quote/generate-quote-elements/generateQuoteElements";
import { StyledSearch } from "./Search.Styled";
import ErrorMsg from "../../shared/error/ErrorMsg";
import Page from "../../shared/motion/Page";
import Title from "./title/Title";
import Subtitle from "./subtitle/Subtitle";
import SearchDropDowns from "./search-drop-downs/SearchDropDowns";

const Search = ({ allCharacters }) => {
  const { data, fetchData, isLoading, apiError, apiErrorMsg } = useFetch();
  const quoteElements = generateQuoteElements(data);

  const renderedContent = isLoading ? (
    <div className="container-loader">
      <PuffLoader color="#991E1F" size={100} />
    </div>
  ) : (
    <div className="text-white text-center mt-5 p-1">
      <div className="container-title">
        <Title quotesData={data} />
        <Subtitle quotesData={data} />
      </div>

      <div className="container-quotes ">{quoteElements}</div>
    </div>
  );

  const error = apiError ? <ErrorMsg error={apiErrorMsg} /> : null;

  return (
    <Page>
      <StyledSearch>
        <SearchDropDowns allCharacters={allCharacters} fetchData={fetchData} />
        {error}
        {renderedContent}
      </StyledSearch>
    </Page>
  );
};

export default Search;
