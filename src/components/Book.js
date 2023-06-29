/* eslint-disable */
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/books/booksSlice";

const Book = ({ title, author, category, id }) => {
  const dispatch = useDispatch();
  return (
    <div className='book-container'>
      <span className='book-title'>{title}</span>
      <span className='book-author'>{author}</span>
      <span className='book-category'>{category}</span>
      <button
        type='submit'
        onClick={() => {
          dispatch(remove({ id }));
        }}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
