import React, { useRef, useEffect, useState } from "react";
import { StyledQuoteCard } from "./QuoteCard.Styled";
import { fadeInVariant } from "../../../shared/motion/fadeInVariants";
import { AnimatePresence } from "framer-motion";

import FullQuote from "./full-quote/FullQuote";

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

  const showMoreBtn =
    hasOverflow && !showMore ? (
      <button onClick={expandQuote} className="read-more text-grey">
        Show More
      </button>
    ) : null;

  return (
    <StyledQuoteCard
      variants={fadeInVariant}
      initial="initial"
      animate="animate"
    >
      <div className="container-quote" ref={containerRef}>
        <p className="quote p-2">{quote}</p>
      </div>

      <AnimatePresence>
        {showMore ? (
          <FullQuote
            quote={quote}
            expandQuote={expandQuote}
            character={character}
          />
        ) : null}
      </AnimatePresence>

      <div className="d-flex justify-content-center m-2">{showMoreBtn}</div>

      <p className="character text-red m-2">- {character} -</p>
    </StyledQuoteCard>
  );
};

export default QuoteCard;
