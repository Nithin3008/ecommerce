import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const initialState = { wishlist: [], status: "idle" };
const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlistEmpty(state) {
      state.wishlist = [];
      state.status = "idle";
    },
  },
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
    builder.addCase(RemoveWishlistItem.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(RemoveWishlistItem.fulfilled, (state, action) => {
      state.wishlist = action.payload;
      state.status = "idle";
    });
  },
});
export const { setWishlistEmpty } = wishListSlice.actions;
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
    if (response.status === 201) {
      toast.success("Added to Whislist", {
        position: "bottom-right",
      });
    }
    return response.data.wishlist;
  }
);
export const RemoveWishlistItem = createAsyncThunk(
  "Wishlist/RemoveWishlistItem",
  async (prodId, thunkAPI) => {
    console.log(prodId);
    const encodedToken = localStorage.getItem("loginToken");
    const response = await axios.delete(`/api/user/wishlist/${prodId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (response.status === 200) {
      toast.warning("Removed from Wishlist", {
        position: "bottom-right",
      });
    }
    return response.data.wishlist;
  }
);

export default wishListSlice.reducer;
