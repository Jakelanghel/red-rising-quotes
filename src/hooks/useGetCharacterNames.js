import { useEffect, useState } from "react";

export const useGetCharacterNames = () => {
  const [allCharacters, setCharacters] = useState({
    error: false,
    allCharacters: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dynamic-api-proxy.onrender.com/api/red-rising/characters/"
        );
        const data = await response.json();
        // setCharacters(data.results);
        setCharacters((oldState) => ({
          ...oldState,
          allCharacters: data.results,
        }));
      } catch (error) {
        setCharacters((oldState) => ({ ...oldState, error: true }));
      }
    };
    fetchData();
  }, []);

  return allCharacters;
};
