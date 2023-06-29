import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

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
