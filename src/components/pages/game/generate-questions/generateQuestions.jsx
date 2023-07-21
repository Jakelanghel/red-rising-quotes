import React from "react";
import { nanoid } from "nanoid";
import { generateAnswers } from "./generate-answers/generateAnswers";
import QuestionCard from "../game-board/question-card/QuestionCard";

export const generateQuestions = (allCharacters, quotesData, handleClick) => {
  if (!quotesData) {
    return null;
  }

  return quotesData.map((quote) => {
    const answerElements = generateAnswers(allCharacters, quote, handleClick);
    return (
      <QuestionCard
        key={nanoid()}
        answerElements={answerElements}
        question={quote.text}
      />
    );
  });
};
