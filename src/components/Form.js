import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleClickAddBtn = (e) => {
    e.preventDefault();
    dispatch(add({ title, author }));
    // reset form
    setTitle('');
    setAuthor('');
  };
  return (
    <div className="form-container">
      <h2>Add new book</h2>
      <form>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleClickAddBtn(e)}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
