import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import wishlistService from "./wishlistService";
const wishlist = JSON.parse(localStorage.getItem("wishlist"));

const initialState = {
  wishlist: null,
  wishlistItems: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createWishlist = createAsyncThunk(
  "wishlist/",
  async (wishlistId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await wishlistService.createWishlist(wishlistId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAllWishlistItems = createAsyncThunk(
  "wishlist/getAll",
  async (wishlistId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await wishlistService.getAllWishlistItems(wishlistId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addWishlistItem = createAsyncThunk(
  "wishlist/item/add",
  async (itemData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await wishlistService.addWishlistItem(itemData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const removeWishlistItem = createAsyncThunk(
  "wishlist/item/remove",
  async (wishlistItemId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await wishlistService.removeWishlistItem(wishlistItemId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    resetAll: (state) => {
      state.wishlist = null;
      state.wishlistItems = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.wishlist = action.payload;
        state.wishlistItems = [];
      })
      .addCase(createWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllWishlistItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllWishlistItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.wishlistItems = action.payload;
      })
      .addCase(getAllWishlistItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addWishlistItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addWishlistItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.wishlistItems = [action.payload, ...state.wishlistItems];
      })
      .addCase(addWishlistItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(removeWishlistItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeWishlistItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.wishlistItems = state.wishlistItems.filter(
          (item) => item.product_id !== Number(action.payload.id)
        );
      })
      .addCase(removeWishlistItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, resetAll } = wishlistSlice.actions;
export default wishlistSlice.reducer;
