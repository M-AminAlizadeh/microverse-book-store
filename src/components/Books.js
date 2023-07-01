import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Book from "./Book";
import { fetchBooks } from "../redux/books/booksSlice";

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(books);
  return (
    <div>
      {Object.entries(books).map(([key, bookItems]) =>
        bookItems.map((book) => (
          <Book
            key={key}
            id={key}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))
      )}
    </div>
  );
};

export default Books;
