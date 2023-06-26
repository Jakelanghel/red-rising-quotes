import React, { useEffect, useState } from "react";

export const useGetCharacterNames = () => {
  const [characterElements, setCharacterElements] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:5000/api/red-rising/characters/")
        .then((res) => res.json())
        .then((data) => {
          const characterList = data.results.map((char, i) => (
            <p key={i} className="character">
              {char.name}
            </p>
          ));
          setCharacterElements(characterList);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return characterElements;
};
