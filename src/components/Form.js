import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, fetchBooks } from "../redux/books/booksSlice";

const Form = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [addedBooks, setAddedBooks] = useState([]);
  const dispatch = useDispatch();

  const handleClickAddBtn = async (e) => {
    e.preventDefault();

    const newItem = {
      item_id: `item${Math.floor(Math.random() * 10000)}`,
      title,
      author,
      category: "Fiction",
    };

    // Dispatch the addBook action to update the Redux store
    await dispatch(addBook(newItem));

    // Update the local state with the newly added book
    setAddedBooks([...addedBooks, newItem]);

    // Reset form
    setTitle("");
    setAuthor("");
  };

  return (
    <div className='form-container'>
      <h2>Add new book</h2>
      <form>
        <input
          type='text'
          placeholder='Book title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='text'
          placeholder='Author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type='submit' onClick={handleClickAddBtn}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
