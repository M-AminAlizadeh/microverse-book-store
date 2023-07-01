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

  const bookComponents = [];
  for (const itemId in books) {
    const bookArray = books[itemId];

    for (const book of bookArray) {
      bookComponents.push(
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      );
    }
  }
  return <div>{bookComponents}</div>;
};

export default Books;
