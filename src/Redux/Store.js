import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import prodCateReducer from "./ProductCategorySlice";
import userReducer from "./UserSlice";
import wishListReducer from "./WishlistRedux";
import FiltersReducer from "./FilterSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    prodCate: prodCateReducer,
    user: userReducer,
    wishlist: wishListReducer,
    filter: FiltersReducer,
  },
});
export default store;
