import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = { wishlist: [], status: "idle" };
const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchWishlist.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(FetchWishlist.fulfilled, (state, action) => {
      state.wishlist = action.payload;
      state.status = "idle";
    });

    builder.addCase(AddWishlistItem.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(AddWishlistItem.fulfilled, (state, action) => {
      state.wishlist = action.payload;
      state.status = "idle";
    });
  },
});
export const FetchWishlist = createAsyncThunk(
  "Wishlist/FetchWishlist",
  async () => {
    const encodedToken = localStorage.getItem("loginToken");

    const response = await axios.get(`/api/user/wishlist`, {
      headers: {
        authorization: encodedToken,
      },
    });
    return response.data.wishlist;
  }
);
export const AddWishlistItem = createAsyncThunk(
  "Wishlist/AddWishlistItem",
  async (product, thunkAPI) => {
    const encodedToken = localStorage.getItem("loginToken");
    const response = await axios.post(
      "/api/user/wishlist",
      {
        product,
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    return response.data.wishlist;
  }
);

export default wishListSlice.reducer;
