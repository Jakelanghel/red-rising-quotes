import React, { useState, useEffect } from "react";
import { StyledCharacterQuote } from "./CharacterQuote.Styled";
import { useInView } from "react-intersection-observer";
import ChapterData from "./chapter-data/ChapterData";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

const CharacterQuote = ({ quoteData, id }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const quoteVariant1 = {
    visible: { x: 0, transition: { duration: 0.5 } },
    hidden: { x: "-100vw" },
  };
  const quoteVariant2 = {
    visible: { x: 0, transition: { duration: 0.5 } },
    hidden: { x: "100vw" },
  };

  useEffect(() => {
    console.log("inView =", inView);
    if (inView && !animationPlayed) {
      animation.start("visible");
      setAnimationPlayed(true);
    }
  }, [inView]);

  const variantUsed = id % 2 === 0 ? quoteVariant1 : quoteVariant2;

  return (
    <StyledCharacterQuote ref={ref}>
      <motion.div
        className="character-quote p-4"
        variants={variantUsed}
        animate={animation}
        initial={"hidden"}
      >
        <p>{quoteData.text}</p>

        <div className="quote-info d-flex flex-row justify-content-between align-items-center gap-2 fs-6">
          <div className="d-flex flex-column">
            <p>Book</p>
            <p className="text-red">{quoteData.book}</p>
          </div>
          <div className="d-flex flex-column">
            <ChapterData quoteData={quoteData} />
          </div>
        </div>
      </motion.div>
    </StyledCharacterQuote>
  );
};

export default CharacterQuote;
