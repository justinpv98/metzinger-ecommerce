import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderService";

const initialState = {
    orders: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  };

  export const createOrder = createAsyncThunk(
    "order/createOrder",
    async (orderData, thunkAPI) => {
      try {
        const id = thunkAPI.getState().auth.user.id;
        const cartItems = thunkAPI.getState().cart.cartItems;
        orderData = {...orderData, userId: id, cartItems}

        const token = thunkAPI.getState().auth.user.token;
        
        return await orderService.createOrder(orderData, token);
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

  export const getOrders = createAsyncThunk(
    "order/getOrders",
    async (userId, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await orderService.getOrders(userId, token);
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
  )

  export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      },
      resetAll: (state) => {
        state.orders = []
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(createOrder.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(createOrder.fulfilled, (state) => {
          state.isLoading = false;
          state.isSuccess = true;
        })
        .addCase(createOrder.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        })
        .addCase(getOrders.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getOrders.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.orders = action.payload;
        })
        .addCase(getOrders.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        });
    },
  });
  
  export const { reset, resetAll } = orderSlice.actions;
  export default orderSlice.reducer;
  