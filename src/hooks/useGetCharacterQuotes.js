import { useState } from "react";

export const useGetCharacterQuotes = () => {
  const [quotesData, setQuotesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCharacterQuotes = async (character, quantity) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/red-rising/character-quotes/?slug=${character}&quantity=${quantity}`
      );
      const data = await response.json();
      setQuotesData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return { quotesData, isLoading, getCharacterQuotes };
};
