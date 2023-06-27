import { useState } from "react";

export const useGetCharacterQuote = () => {
  const [quotesData, setQuotesData] = useState(null);

  const getCharacterQuotes = (character) => {
    fetch(
      `http://localhost:5000/api/red-rising/character-quotes/?slug=${character}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { quotesData, getCharacterQuotes };
};
