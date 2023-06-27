import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    check: (state) => state.value,
  },
});
export const { check } = categoriesSlice.actions;
export default categoriesSlice;
