import { useEffect, useState } from "react";

export const useGetBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dynamic-api-proxy.onrender.com/api/red-rising/books/"
        );
        const data = await response.json();
        setAllBooks(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return allBooks;
};
