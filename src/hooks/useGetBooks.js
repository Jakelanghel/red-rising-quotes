import { useEffect, useState } from "react";

export const useGetBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:5000/api/red-rising/books/")
        .then((res) => res.json())
        .then((data) => {
          setAllBooks(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return allBooks;
};
