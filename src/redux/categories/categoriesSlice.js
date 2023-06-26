import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Under construction",
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    check: (state) => {
      return state.value;
    },
  },
});
