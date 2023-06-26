import React, { useEffect, useState } from "react";

export const useGetCharacterNames = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:5000/api/red-rising/characters/")
        .then((res) => res.json())
        .then((data) => {
          setCharacters(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return characters;
};
