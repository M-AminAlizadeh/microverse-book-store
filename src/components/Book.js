/* eslint-disable */
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
      <div className="book-right-side">
        <span className="book-category">{category}</span>
        <span className="book-title">{title}</span>
        <span className="book-author">{author}</span>
        <div className="buttons-container">
          <a href="#"> Comments | </a>
          <a href="#" onClick={handleRemove}>Remove </a>
          <a href="#">| Edit</a>
        </div>
      </div>
      <div className="book-middle-part">
        <img
          src="https://img.icons8.com/color/58/loading-sign.png"
          alt="loading-sign"
        />
        <div>
          <p>64%</p>
          <p>completed</p>
        </div>
      </div>
      <div className="book-left-side">
        <p>Current chapter</p>
        <p>Chapter 17</p>
        <button className="add-btn">Update progress</button>
      </div>
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
