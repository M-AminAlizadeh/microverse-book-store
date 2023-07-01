import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

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

  // Iterate over the keys of the books object using Object.keys()
  Object.keys(books).forEach((itemId) => {
    const bookArray = books[itemId];

    // Iterate over the bookArray using array iteration methods
    bookArray.forEach((book) => {
      bookComponents.push(
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />,
      );
    });
  });

  return <div>{bookComponents}</div>;
};

export default Books;
