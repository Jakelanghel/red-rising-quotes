import React, { useRef, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useHasOverFlow } from "../../../hooks/useHasOverFlow";
import { StyledQuoteCard } from "./QuoteCard.Styled";
import { fadeInVariant } from "../motion/fadeInVariants";
import { renderShowMore } from "./render/renderShowMore";
import { renderName } from "./render/renderName";
import { renderChapterInfo } from "./render/renderChapterInfo";
import FullQuote from "./full-quote/FullQuote";

const QuoteCard = ({
  book = null,
  character = null,
  quote = null,
  chapterData = null,
  parentComponent = null,
}) => {
  const containerRef = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const hasOverflow = useHasOverFlow(containerRef, quote);

  const expandQuote = () => {
    setShowMore((oldState) => !oldState);
  };

  const showMoreBtn = renderShowMore(hasOverflow, showMore, expandQuote);
  const name = renderName(parentComponent, character);
  const chapterInfo = renderChapterInfo(parentComponent, book, chapterData);
  const quoteClass = hasOverflow ? "lrg-quote" : "sml-quote";
  const containerClass =
    parentComponent === "game" ? "container-game-quote" : "container-quote";

  return (
    <StyledQuoteCard
      variants={fadeInVariant}
      initial="initial"
      animate="animate"
      className={parentComponent === "search" ? "search-quote" : null}
    >
      <AnimatePresence mode="wait">
        {showMore ? (
          <FullQuote quote={quote} expandQuote={expandQuote} character={name} />
        ) : null}
      </AnimatePresence>

      <div className={containerClass} ref={containerRef}>
        <p className={`quote ${quoteClass}`}>{quote}</p>
      </div>
      {name}

      <div className="container-show-more d-flex justify-content-center">
        {showMoreBtn}
      </div>
      {chapterInfo}
    </StyledQuoteCard>
  );
};

export default QuoteCard;
