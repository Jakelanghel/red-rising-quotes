import { useState } from "react";
import { generateRandomNumbers } from "../util/generateRandomNumbers";

export const useGetBookQuotes = () => {
  const [quotesData, setQuotesData] = useState(null);

  const getBookQuotes = (selectedBook, length) => {
    fetch(`http://localhost:5000/api/red-rising/game/?slug=${selectedBook}`)
      .then((response) => response.json())
      .then((data) => {
        // filter out quotes that are to long
        const quotesArr = data.quotes.filter(
          (quote) => quote.text.length < 250
        );
        // get random indexes and use them to select random quotes
        const indexArr = generateRandomNumbers(quotesArr, length);
        const modifiedQuotes = indexArr.map((index) => quotesArr[index]);
        setQuotesData({ ...data, quotes: modifiedQuotes });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { quotesData, getBookQuotes };
};
