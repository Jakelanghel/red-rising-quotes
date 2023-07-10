import { useState } from "react";
import { getQuotes } from "../util/getQuotes";

export const useGetCharacterQuotes = () => {
  const [quotesData, setQuotesData] = useState(null);

  const getCharacterQuotes = (character, quantity) => {
    fetch(
      `http://localhost:5000/api/red-rising/character-quotes/?slug=${character}`
    )
      .then((response) => response.json())
      .then((data) => {
        getQuotes(data, setQuotesData, quantity);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { quotesData, getCharacterQuotes };
};
