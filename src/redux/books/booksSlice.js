import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      const { title, author } = action.payload;
      state.value.push({
        item_id: `item${Math.floor(Math.random() * 10000)}`,
        title,
        author,
      });
    },
    remove: (state, action) => {
      const { id } = action.payload;
      state.value = state.value.filter((book) => book.item_id !== id);
    },
  },
});
export const { add, remove } = booksSlice.actions;
export default booksSlice.reducer;
