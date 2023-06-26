import { useState } from "react";

export const useGetCharacterQuote = (setter, character) => {
  fetch(
    `http://localhost:5000/api/red-rising/character-quotes?slug=${character}/`
  )
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
};
