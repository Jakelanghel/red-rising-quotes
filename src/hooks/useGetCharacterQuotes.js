import { useState } from "react";
import { generateRandomNumbers } from "../util/generateRandomNumbers";

export const useGetCharacterQuotes = () => {
  const [quotesData, setQuotesData] = useState(null);

  const getCharacterQuotes = (character, quantity) => {
    fetch(
      `http://localhost:5000/api/red-rising/character-quotes/?slug=${character}`
    )
      .then((response) => response.json())
      .then((data) => {
        const quotesArr = data.quotes;
        if (quantity !== 0 && quantity < quotesArr.length) {
          const indexArr = generateRandomNumbers(quotesArr, quantity);
          const modifiedQuotes = indexArr.map((index) => quotesArr[index]);
          setQuotesData({ ...data, quotes: modifiedQuotes });
        } else {
          setQuotesData(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { quotesData, getCharacterQuotes };
};
