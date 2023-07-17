import React from "react";
import { StyledFullQuote } from "./FullQuoteStyled";

const FullQuote = ({ quote, expandQuote, character }) => {
  const fullQuoteVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <StyledFullQuote
      variants={fullQuoteVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <button onClick={expandQuote} className="show-more text-grey">
        Show Less
      </button>

      <p className="character text-red">- {character} -</p>

      <p className="quote">{quote}</p>
      <button onClick={expandQuote} className="show-more text-grey">
        Show Less
      </button>
    </StyledFullQuote>
  );
};

export default FullQuote;
