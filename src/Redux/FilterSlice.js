import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CategoryFilter: [],
  SortBy: "",
  Rating: 0,
  Range: 3800001,
  Search: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.Search = action.payload;
    },
    setRange(state, action) {
      state.Range = action.payload;
    },
    setRating(state, action) {
      state.Rating = action.payload;
    },
    setSort(state, action) {
      state.SortBy = action.payload;
    },
    setCategory(state, action) {
      console.log(state.CategoryFilter, action.payload);
      state.CategoryFilter = state.CategoryFilter.includes(action.payload)
        ? state.CategoryFilter.filter((val) => val !== action.payload)
        : [...state.CategoryFilter, action.payload];
    },
    setAllClear(state) {
      state.CategoryFilter = [];
      state.SortBy = "";
      state.Rating = 0;
      state.Range = 3800001;
      state.Search = "";
    },
  },
});

export const {
  setRange,
  setRating,
  setSearch,
  setSort,
  setCategory,
  setAllClear,
} = filterSlice.actions;
export default filterSlice.reducer;
