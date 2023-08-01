import React, { useEffect } from "react";
import { StyledFullQuote } from "./FullQuote.Styled";

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

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Prevent scrolling in the background
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling on component unmount
    };
  }, []);

  return (
    <StyledFullQuote
      variants={fullQuoteVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {character}

      <div className="container-full-quote">
        <p className="full-quote">{quote}</p>
      </div>
      <button onClick={expandQuote} className="show-more text-grey">
        Show Less
      </button>
    </StyledFullQuote>
  );
};

export default FullQuote;
