import { useState } from "react";

export const useGetCharacterQuotes = () => {
  const [quotesData, setQuotesData] = useState(null);

  const getQuotes = (data, quantity) => {
    // check if user selected a quantity that is less that total number of quotes
    if (quantity !== 0 && quantity < data.quotes.length) {
      const quotesArr = [];
      // push random quote to quotesArr to get correct quantity
      for (let i = 0; i < quantity; i++) {
        const x = Math.floor(Math.random() * data.quotes.length);
        quotesArr.push(data.quotes[x]);
      }
      return quotesArr;
    } else {
      // if quantity is 0 or quantity is greater that total number of quotes return all quotes
      return data.quotes;
    }
  };

  const getCharacterQuotes = (character, quantity) => {
    fetch(
      `http://localhost:5000/api/red-rising/character-quotes/?slug=${character}`
    )
      .then((response) => response.json())
      .then((data) => {
        const quotesArr = getQuotes(data, quantity);
        setQuotesData({ ...data, quotes: quotesArr });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { quotesData, getCharacterQuotes };
};
