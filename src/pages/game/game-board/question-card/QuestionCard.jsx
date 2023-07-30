import React from "react";
import { StyledQuestionCard } from "./QuestionCard.Styled";
import { fadeInVariants } from "../../../../shared/fadeInVariants";
import QuoteCard from "../../../../components/quote-card/QuoteCard";

const QuestionCard = (props) => {
  const { answerElements, question } = props;
  return (
    <StyledQuestionCard
      variants={fadeInVariants}
      initial="initial"
      animate="animate"
    >
      <QuoteCard
        quote={question}
        customClass="question-quote"
        parentComponent="game"
      />
      <div className="container-answers">{answerElements}</div>
    </StyledQuestionCard>
  );
};

export default QuestionCard;
