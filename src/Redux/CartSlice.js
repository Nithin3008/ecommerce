import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { cart: [], status: "idle" };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchCart.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(FetchCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.status = "idle";
    });

    builder.addCase(AddCartItem.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(AddCartItem.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.status = "idle";
    });
  },
});
export const FetchCart = createAsyncThunk("cart/FetchCart", async () => {
  const encodedToken = localStorage.getItem("loginToken");

  const response = await axios.get(`/api/user/cart`, {
    headers: {
      authorization: encodedToken,
    },
  });
  console.log("cart loading", response.data);
});
export const AddCartItem = createAsyncThunk(
  "cart/AddCartItem",
  async (product, thunkAPI) => {
    const encodedToken = localStorage.getItem("loginToken");
    console.log(product);
    const response = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    return response.data.cart;
  }
);
export default cartSlice.reducer;
