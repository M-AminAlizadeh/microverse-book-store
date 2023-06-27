import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      const { title } = action.payload;
      state.value.push({ title });
    },
    remove: (state, action) => {
      const { id } = action.payload;
      state.value = state.value.filter((book) => book.id !== id);
    },
  },
});
export const { add, remove } = booksSlice.actions;
export default booksSlice;
