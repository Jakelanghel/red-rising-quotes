import { useState } from "react";

export const useGetRandomQuote = () => {
  const [quote, setQuote] = useState({
    quote: "I would have lived in peace. But my enemies brought me war.",
    character: "Darrow O'Lykos",
  });

  const getRandomQuote = () => {
    fetch("http://localhost:5000/api/red-rising/random/")
      .then((response) => response.json())
      .then((data) => {
        const newQuote = {
          quote: data.results[0].text,
          character: data.results[0].character,
        };
        setQuote(newQuote);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { quote, getRandomQuote };
};
