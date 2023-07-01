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
      <hr />
      <h2>Add new book</h2>
      <form>
        <input
          type="text"
          className="book-title-input"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="book-author-input"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select className="book-category-input">
          <option selected>category</option>
          <option value="Fiction">Fiction</option>
        </select>
        <button className="add-btn" type="submit" onClick={handleClickAddBtn}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
