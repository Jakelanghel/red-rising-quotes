import React from "react";
import { StyledQuestionCard } from "./QuestionCard.Styled";
import { fadeInVariant } from "../../../../shared/motion/fadeInVariants";
import QuoteCard from "../../../../shared/quote-card/QuoteCard";

const QuestionCard = (props) => {
  const { answerElements, question } = props;
  return (
    <StyledQuestionCard
      variants={fadeInVariant}
      initial="initial"
      animate="animate"
    >
      <QuoteCard
        quote={question}
        customClass={"question-quote"}
        parentComponent="game"
      />
      <div className="container-answers">{answerElements}</div>
    </StyledQuestionCard>
  );
};

export default QuestionCard;
