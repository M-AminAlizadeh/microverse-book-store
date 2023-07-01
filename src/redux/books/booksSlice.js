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

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    fetchBooksRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBooksSuccess: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    fetchBooksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addBookRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    addBookSuccess: (state, action) => {
      state.loading = false;
      state.books.push(action.payload);
    },
    addBookFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeBookRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    removeBookSuccess: (state, action) => {
      const itemId = action.payload.itemId;
      delete state.books[itemId];
    },
    removeBookFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const { itemId } = action.meta.arg;
        for (const id in state.books) {
          state.books[id] = state.books[id].filter(
            (book) => book.item_id !== itemId
          );
        }
      })

      .addCase(removeBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Get
export const fetchBooks = () => {
  return async (dispatch) => {
    dispatch(fetchBooksRequest());

    try {
      const response = await axios.get(`${baseUrl}${appId}/books`);
      console.log(response.data);
      dispatch(fetchBooksSuccess(response.data));
    } catch (error) {
      dispatch(fetchBooksFailure(error.message));
    }
  };
};

// Post
export const addBook = (bookData) => {
  return async (dispatch) => {
    dispatch(addBookRequest());

    try {
      const response = await axios.post(`${baseUrl}${appId}/books`, {
        item_id: bookData.item_id,
        title: bookData.title,
        author: bookData.author,
        category: bookData.category,
      });
      dispatch(addBookSuccess(response.data));
    } catch (error) {
      dispatch(addBookFailure(error.message));
    }
  };
};

// Delete
export const removeBook = createAsyncThunk(
  "books/removeBook",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${baseUrl}${appId}/books/${payload.itemId}`,
        {
          data: {
            item_id: payload.itemId,
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      return payload.itemId;
    } catch (error) {
      console.log(error.response);
      throw new Error(error.message);
    }
  }
);

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
