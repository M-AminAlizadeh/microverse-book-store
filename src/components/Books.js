import React from "react";
import Book from "./Book";
import { useSelector } from "react-redux";

const Books = () => {
  const books = useSelector((state) => state.books.value);

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
    </div>
  );
};

export default Books;
