import { useState } from "react";

export const useGetRandomQuote = () => {
  const [quote, setQuote] = useState({
    quote: "I would have lived in peace. But my enemies brought me war.",
    character: "Darrow O'Lykos",
  });

  const getRandomQuote = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/red-rising/random/"
      );
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { quote, getRandomQuote };
};
