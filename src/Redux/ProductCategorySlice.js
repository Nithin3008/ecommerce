import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { products: [], category: [], status: "idle" };
const productsSlice = createSlice({
  name: "productsCategories",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(FetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(FetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = "idle";
    });
    builder.addCase(FetchCategory.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(FetchCategory.fulfilled, (state, action) => {
      state.category = action.payload;
      state.status = "idle";
    });
  },
});
export const { fetchCategory, fetchProducts } = productsSlice.actions;
export default productsSlice.reducer;

export const FetchProducts = createAsyncThunk(
  "productsCategories/FetchProducts",
  async () => {
    const received = await axios.get("/api/products");
    return received.data.products;
  }
);
export const FetchCategory = createAsyncThunk(
  "productsCategories/FetchCategory",
  async () => {
    const received = await axios.get("/api/categories");
    return received.data.categories;
  }
);
