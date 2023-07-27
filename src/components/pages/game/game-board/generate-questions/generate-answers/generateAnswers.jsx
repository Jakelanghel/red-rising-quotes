import { generateRandomNumbers } from "../../../../../../util/generateRandomNumbers";
import { Button } from "react-bootstrap";
import { nanoid } from "nanoid";
import { filterAnswers } from "../../../../../../util/filterAnswers";

export const generateAnswers = (allCharacters, quote, handleClick) => {
  const correctAnswer = quote.character;
  const ansArr = filterAnswers(allCharacters);
  // get random indexes then map over them to pull incorrect answers from allCharacters
  const answersIndexArr = generateRandomNumbers(ansArr, 3);
  let answers = answersIndexArr.map((index) => ansArr[index].name);
  // add correct answer and random index
  const randomIndex = Math.floor(Math.random() * (answersIndexArr.length + 1));
  answers.splice(randomIndex, 0, correctAnswer);

  const checkAns = (e) => {
    const selectedAns = e.target.id;
    const isCorrect = selectedAns === correctAnswer ? true : false;
    handleClick(isCorrect);
  };

  return answers.map((ans) => {
    const arr = ans.split(" ");
    const name = arr[0];
    return (
      <Button key={nanoid()} onClick={checkAns} className="answer" id={ans}>
        {name}
      </Button>
    );
  });
};
