import { useEffect, useState } from "react";

export const useGetCharacterNames = () => {
  const [allCharacters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dynamic-api-proxy.onrender.com/api/red-rising/characters/"
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return allCharacters;
};
