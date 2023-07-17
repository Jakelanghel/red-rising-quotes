import { useState } from "react";
import { filterQuotes } from "../util/filterQuotes";
import { filterName } from "../util/filterName";

export const useGetBookQuotes = () => {
  const [quotesData, setQuotesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getBookQuotes = async (selectedBook, length) => {
    // console.log(selectedBook);
    let url;
    let quotesKey;
    // if (selectedBook !== "all-books") {
    //   url = `http://localhost:5000/api/red-rising/game/?slug=${selectedBook}`;
    //   quotesKey = "quotes";
    // } else {
    //   url = "http://localhost:5000/api/red-rising/all/";
    //   quotesKey = "results";
    // }
    try {
      setIsLoading(true);

      const response = await fetch(
        `http://localhost:5000/api/red-rising/game/?slug=${selectedBook}&length=${length}`
      );
      const data = await response.json();
      console.log(data);
      // let modifiedQuotes = filterQuotes(data[quotesKey], length); // filter out quotes that are too long
      // modifiedQuotes = filterName(modifiedQuotes); // filter characters name from questions
      // setQuotesData({ ...data, quotes: modifiedQuotes });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return { quotesData, getBookQuotes, isLoading };
};
