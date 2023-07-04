import React from "react";

const QuestionCard = (props) => {
  const { answerElements, question } = props;
  console.log(question.length);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-4 mt-3">
      <p className="fs-3">{question}</p>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-2">
        {answerElements}
      </div>
    </div>
  );
};

export default QuestionCard;
