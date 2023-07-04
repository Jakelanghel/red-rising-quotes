import React from "react";

const QuestionCard = (props) => {
  const { answerElements, question } = props;
  console.log(typeof answerElements);
  return (
    <div>
      <h2>{question}</h2>
      <div>{answerElements}</div>
    </div>
  );
};

export default QuestionCard;
