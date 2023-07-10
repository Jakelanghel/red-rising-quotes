import React from "react";
import { StyledQuestionCard } from "./QuestionCard.Styled";
import { fadeInVariant } from "../../../../shared/motion/fadeInVariants";

const QuestionCard = (props) => {
  const { answerElements, question } = props;
  return (
    <StyledQuestionCard
      variants={fadeInVariant}
      initial="initial"
      animate="animate"
    >
      <p className="question fs-3 p-3">{question}</p>
      <div className="d-flex flex-row flex-wrap justify-content-center gap-3">
        {answerElements}
      </div>
    </StyledQuestionCard>
  );
};

export default QuestionCard;
