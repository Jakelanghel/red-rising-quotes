import React, { useRef, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useHasOverFlow } from "../../../hooks/useHasOverFlow";
import { scrollToTop } from "../../../util/scrollToTop";
import { StyledQuoteCard } from "./QuoteCard.Styled";
import { fadeInVariant } from "../motion/fadeInVariants";
import { renderShowMore } from "./render/renderShowMore";
import { renderName } from "./render/renderName";
import { renderChapterInfo } from "./render/renderChapterInfo";
import FullQuote from "./full-quote/FullQuote";

const QuoteCard = ({
  book,
  character,
  quote,
  chapterData,
  parentComponent = null,
}) => {
  const containerRef = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const hasOverflow = useHasOverFlow(containerRef, quote);

  useEffect(() => {
    scrollToTop();
  }, [showMore]);

  const expandQuote = () => {
    setShowMore((oldState) => !oldState);
  };

  const showMoreBtn = renderShowMore(hasOverflow, showMore, expandQuote);
  const name = renderName(parentComponent, character);
  const chapterInfo = renderChapterInfo(parentComponent, book, chapterData);
  const quoteClass = hasOverflow ? "lrg-quote" : "sml-quote";

  return (
    <StyledQuoteCard
      variants={fadeInVariant}
      initial="initial"
      animate="animate"
      className={parentComponent === "search" ? "search-quote" : null}
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
      {name}
      {chapterInfo}
    </StyledQuoteCard>
  );
};

export default QuoteCard;
