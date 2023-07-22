import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFetch } from "../../../hooks/useFetch";
import { generateQuoteElements } from "./generate-quote-elements/generateQuoteElements";
import { StyledSearch } from "./Search.Styled";
import ErrorMsg from "../../shared/error/ErrorMsg";
import Page from "../../shared/motion/components/Page";
import SearchContent from "./search-content/SearchContent";
import SearchDropDowns from "./search-drop-downs/SearchDropDowns";

const Search = ({ allCharacters }) => {
  const { data, fetchData, isLoading, apiError, apiErrorMsg } = useFetch();
  const quoteElements = generateQuoteElements(data);
  const [isWobbling, setIsWobbling] = useState(false);

  const wobble = () => {
    setIsWobbling(true);
    setTimeout(() => setIsWobbling(false), 1000);
  };

  return (
    <Page customClass="search-page">
      <StyledSearch>
        <SearchDropDowns
          allCharacters={allCharacters}
          fetchData={fetchData}
          wobble={wobble}
        />
        <ErrorMsg apiError={apiError} error={apiErrorMsg} />

        <motion.div
          className="wobble-div"
          animate={{
            rotate: isWobbling ? [0, -3, 3, -2, 2, -1, 1, 0] : 0,
          }}
          transition={{ duration: 1.15 }}
        >
          <SearchContent
            isLoading={isLoading}
            data={data}
            quoteElements={quoteElements}
          />
        </motion.div>
      </StyledSearch>
    </Page>
  );
};

export default Search;
