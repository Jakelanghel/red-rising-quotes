import { useEffect, useState } from "react";

export const useGetBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/red-rising/books/"
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
