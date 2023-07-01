import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleClickAddBtn = (e) => {
    e.preventDefault();

    // Dispatch the addBook action to update the local state
    dispatch(
      addBook({
        item_id: `item${Math.floor(Math.random() * 10000)}`,
        title,
        author,
        category: 'Fiction',
      }),
    );

    // Dispatch the fetchBooks action to update the API with the new book
    dispatch(fetchBooks());

    // Reset form
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
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" onClick={handleClickAddBtn}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
