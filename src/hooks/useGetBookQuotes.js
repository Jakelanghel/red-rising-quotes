import { useState } from "react";
import { filterQuotes } from "../util/filterQuotes";
import { filterName } from "../util/filterName";

export const useGetBookQuotes = () => {
  const [quotesData, setQuotesData] = useState(null);

  const getBookQuotes = async (selectedBook, length) => {
    try {
      let url;
      let quotesKey;

      // if selectedBook is All fetch all quotes
      if (selectedBook !== "all-books") {
        url = `http://localhost:5000/api/red-rising/game/?slug=${selectedBook}`;
        quotesKey = "quotes";
      } else {
        url = "http://localhost:5000/api/red-rising/all/";
        quotesKey = "results";
      }

      const response = await fetch(url);
      const data = await response.json();

      // filter out quotes that are too long
      let modifiedQuotes = filterQuotes(data[quotesKey], length);
      modifiedQuotes = filterName(modifiedQuotes);
      setQuotesData({ ...data, quotes: modifiedQuotes });
    } catch (error) {
      console.log(error);
    }
  };

  return { quotesData, getBookQuotes };
};
