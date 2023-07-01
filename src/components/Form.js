import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [addedBooks, setAddedBooks] = useState([]);
  const dispatch = useDispatch();

  const handleClickAddBtn = async (e) => {
    e.preventDefault();

    const newItem = {
      item_id: `item${Math.floor(Math.random() * 10000)}`,
      title,
      author,
      category: 'Fiction',
    };
    await dispatch(addBook(newItem));
    setAddedBooks([...addedBooks, newItem]);
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
