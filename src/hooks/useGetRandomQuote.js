import { useState } from "react";

export const useGetRandomQuote = (setter) => {
  // const [randomQuote, setRandomQuote] = useState({
  //   quote: "I would have lived in peace. But my enemies brought me war.",
  //   character: "Darrow O'Lykos",
  // });

  // const fetchRandomQuote = (setter) => {
  fetch("http://localhost:5000/api/red-rising/random/")
    .then((response) => response.json())
    .then((data) => {
      const newQuote = {
        quote: data.results[0].text,
        character: data.results[0].character,
      };
      setter(newQuote);
    })
    .catch((error) => {
      console.log(error);
    });
  // };

  // return { randomQuote, fetchRandomQuote };
};
