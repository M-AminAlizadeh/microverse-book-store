import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const booksSlice = createSlice({
  name: "books",
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

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = booksSlice.actions;

// export default counterSlice.reducer;
