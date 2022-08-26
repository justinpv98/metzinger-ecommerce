import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "./categoryService";

const initialState = {
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  };

export const getCategory = createAsyncThunk(
    `:category`,
    async (category, thunkAPI) => {
      try {
        return await categoryService.getCategory(category);
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
  
export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
          .addCase(getCategory.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload;
          })
          .addCase(getCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
          })
      },
}
)

export const {reset} = categorySlice.actions;
export default categorySlice.reducer;