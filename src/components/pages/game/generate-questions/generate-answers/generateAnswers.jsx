import { generateRandomNumbers } from "../../../../../util/generateRandomNumbers";
import { Button } from "react-bootstrap";
import { nanoid } from "nanoid";

export const generateAnswers = (allCharacters, quote, handleClick) => {
  // get the correct answer
  const correctAnswer = quote.character;
  // get random indexes then map over them to pull incorrect answers from allCharacters
  const answersIndexArr = generateRandomNumbers(allCharacters, 3);
  let answers = answersIndexArr.map((index) => allCharacters[index].name);
  // add correct answer and random index
  const randomIndex = Math.floor(Math.random() * (answersIndexArr.length + 1));
  answers.splice(randomIndex, 0, correctAnswer);

  const checkAns = (e) => {
    const selectedAns = e.target.textContent;
    const isCorrect = selectedAns === correctAnswer ? true : false;
    handleClick(isCorrect);
  };

  return answers.map((ans) => {
    const arr = ans.split(" ");
    const name = arr[0];
    return (
      <Button key={nanoid()} onClick={checkAns} className="answer">
        {name}
      </Button>
    );
  });
};
