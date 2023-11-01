import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import prodCateReducer from "./ProductCategorySlice";
import UserReducer from "./UserRedux";
import wishListReducer from "./WishlistRedux";
import FiltersReducer from "./FilterSlice";
const store = configureStore({
  reducer: {
    // cart: cartReducer,
    prodCate: prodCateReducer,
    // User: UserReducer,
    // wishlist: wishListReducer,
    filter: FiltersReducer,
  },
});
export default store;
