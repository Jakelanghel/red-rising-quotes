import { useState } from "react";
import { filterQuotes } from "../util/filterQuotes";
import { filterName } from "../util/filterName";

export const useGetBookQuotes = () => {
  const [quotesData, setQuotesData] = useState(null);

  const getBookQuotes = (selectedBook, length) => {
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

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // filter out quotes that are to long
        console.log(data[quotesKey]);
        let modifiedQuotes = filterQuotes(data[quotesKey], length);
        modifiedQuotes = filterName(modifiedQuotes);
        setQuotesData({ ...data, quotes: modifiedQuotes });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { quotesData, getBookQuotes };
};
