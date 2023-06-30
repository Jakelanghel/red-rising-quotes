import { useState } from "react";

export const useGetCharacterQuotes = () => {
  const [quotesData, setQuotesData] = useState(null);

  const getQuotes = () => {
    if (quantity !== 0 && quantity < data.quote.length) {
      const quotesArr = [];
      for (let i = 0; i <= quantity; i++) {
        const x = Math.floor(Math.random() * quotesData.quotes.length);
        quotesArr.push(quotesData.quotes[x]);
      }
      return quotesArr;
    } else {
      return data;
    }
  };

  const getCharacterQuotes = (character, quantity) => {
    console.log(quantity);
    fetch(
      `http://localhost:5000/api/red-rising/character-quotes/?slug=${character}`
    )
      .then((response) => response.json())
      .then((data) => {
        setQuotesData(getQuotes());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { quotesData, getCharacterQuotes };
};
