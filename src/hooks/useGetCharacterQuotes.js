import { useState } from "react";
import { getQuotes } from "../util/getQuotes";

export const useGetCharacterQuotes = () => {
  const [quotesData, setQuotesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCharacterQuotes = async (character, quantity) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/red-rising/character-quotes/?slug=${character}`
      );
      const data = await response.json();
      getQuotes(data, setQuotesData, quantity);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { quotesData, isLoading, getCharacterQuotes };
};
