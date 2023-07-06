import React, { useRef, useEffect, useState } from "react";
import { StyledQuoteCard } from "./QuoteCard.Styled";
import { quoteVariants } from "./quoteVariants";

const QuoteCard = ({ quote, character }) => {
  const containerRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (container.scrollHeight > container.clientHeight) {
      setHasOverflow(true);
    } else {
      setHasOverflow(false);
    }
  }, [quote]);

  const expandQuote = () => {
    setShowMore((oldState) => !oldState);
  };

  const visibilityClass = showMore ? "show" : "hide";
  const positionClass = hasOverflow ? "start" : "centered";
  const buttonTxt = showMore ? "Show Less" : "Show More";

  const readMoreBtn = hasOverflow ? (
    <button onClick={expandQuote} className="read-more text-grey">
      {buttonTxt}
    </button>
  ) : null;

  return (
    <StyledQuoteCard
      variants={quoteVariants}
      initial="initial"
      animate="animate"
    >
      <div className={`${positionClass} ${visibilityClass}`} ref={containerRef}>
        <p className="quote">{quote}</p>
      </div>

      <div className="d-flex justify-content-center m-2">{readMoreBtn}</div>

      <p className="character">- {character} -</p>
    </StyledQuoteCard>
  );
};

export default QuoteCard;
