import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';

const Book = ({
  title, author, category, id,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook({ itemId: id }));
    dispatch(fetchBooks());
  };

  return (
    <div className="book-container">
      <span className="book-title">{title}</span>
      <span className="book-author">{author}</span>
      <span className="book-category">{category}</span>
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
