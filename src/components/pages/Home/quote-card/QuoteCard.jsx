import React, { useRef, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { scrollToTop } from "../../../../util/scrollToTop";
import { StyledQuoteCard } from "./QuoteCard.Styled";
import { fadeInVariant } from "../../../shared/motion/fadeInVariants";
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

  useEffect(() => {
    if (!showMore) {
      scrollToTop();
    }
  }, [showMore]);

  const expandQuote = () => {
    setShowMore((oldState) => !oldState);
  };

  const showMoreBtn =
    hasOverflow && !showMore ? (
      <button onClick={expandQuote} className="show-more text-grey visible">
        Show More
      </button>
    ) : null;

  const quoteClass = hasOverflow ? "lrg-quote" : "sml-quote";

  return (
    <StyledQuoteCard
      variants={fadeInVariant}
      initial="initial"
      animate="animate"
    >
      <AnimatePresence>
        {showMore ? (
          <FullQuote
            quote={quote}
            expandQuote={expandQuote}
            character={character}
          />
        ) : null}
      </AnimatePresence>

      <div className="container-quote" ref={containerRef}>
        <p className={`quote ${quoteClass}`}>{quote}</p>
      </div>

      <div className="container-show-more d-flex justify-content-center">
        {showMoreBtn}
      </div>

      <p className="character text-red">- {character} -</p>
    </StyledQuoteCard>
  );
};

export default QuoteCard;
