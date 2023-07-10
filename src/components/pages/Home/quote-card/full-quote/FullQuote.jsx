import React from "react";
import { StyledFullQuote } from "./FullQuoteStyled";
import { fadeInVariant } from "../../../../shared/motion/fadeInVariants";

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
      <p className="quote p-2">{quote}</p>
      <button onClick={expandQuote} className="read-more text-grey">
        Show Less
      </button>
      <p className="character text-red">- {character} -</p>{" "}
    </StyledFullQuote>
  );
};

export default FullQuote;
