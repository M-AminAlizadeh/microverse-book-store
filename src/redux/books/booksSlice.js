import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/";
const appId = JSON.parse(localStorage.getItem("AppID"));

const initialState = {
  books: [],
  loading: false,
  error: null,
};

// Get
export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}${appId}/books`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Post
export const addBook = createAsyncThunk(
  "books/addBook",
  async (bookData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}${appId}/books`, {
        item_id: bookData.item_id,
        title: bookData.title,
        author: bookData.author,
        category: bookData.category,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete
export const removeBook = createAsyncThunk(
  "books/removeBook",
  async (payload, { rejectWithValue }) => {
    try {
      await axios.delete(`${baseUrl}${appId}/books/${payload.itemId}`, {
        data: {
          item_id: payload.itemId,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { itemId: payload.itemId }; // Make sure the payload contains the 'itemId' property
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.loading = false;
        const newItem = action.payload;
        state.books[newItem.item_id] = [
          {
            item_id: newItem.item_id,
            title: newItem.title,
            author: newItem.author,
            category: newItem.category,
          },
        ];
      })

      .addCase(addBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const { itemId } = action.payload;
        const updatedBooks = Object.keys(state.books).reduce((acc, key) => {
          if (key !== itemId) {
            acc[key] = state.books[key];
          }
          return acc;
        }, {});
        state.books = updatedBooks;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default booksSlice.reducer;

export const {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksFailure,
  addBookRequest,
  addBookSuccess,
  addBookFailure,
  removeBookRequest,
  removeBookSuccess,
  removeBookFailure,
} = booksSlice.actions;
