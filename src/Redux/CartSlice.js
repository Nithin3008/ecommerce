import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = { cart: [], status: "idle" };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setEmptyCart(state) {
      state.cart = [];
      state.status = "idle";
    },
  },
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
    builder.addCase(DeleteCartItem.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(DeleteCartItem.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.status = "idle";
    });
    builder.addCase(IncrementCartItem.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(IncrementCartItem.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.status = "idle";
    });
    builder.addCase(DecrementCartItem.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(DecrementCartItem.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.status = "idle";
    });
  },
});
export const { setEmptyCart } = cartSlice.actions;
export const FetchCart = createAsyncThunk("cart/FetchCart", async () => {
  const encodedToken = localStorage.getItem("loginToken");

  const response = await axios.get(`/api/user/cart`, {
    headers: {
      authorization: encodedToken,
    },
  });

  return response.data.cart;
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
    if (response.status === 201) {
      toast.success("Item added to Cart", {
        position: "bottom-right",
      });
    }
    return response.data.cart;
  }
);
export const DeleteCartItem = createAsyncThunk(
  "cart/DeleteCartItem",
  async (prodId) => {
    const encodedToken = localStorage.getItem("loginToken");
    const response = await axios.delete(`/api/user/cart/${prodId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (response.status === 200) {
      toast.warning("Removed from Cart", {
        position: "bottom-right",
      });
    }
    return response.data.cart;
  }
);
export const IncrementCartItem = createAsyncThunk(
  "/cart/IncrementCartItem",
  async (prodId) => {
    console.log(prodId);
    const encodedToken = localStorage.getItem("loginToken");
    const response = await axios.post(
      `/api/user/cart/${prodId}`,
      {
        action: {
          type: "increment",
        },
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response.status === 200) {
      toast.success("Added one more", {
        position: "bottom-right",
      });
    }
    return response.data.cart;
  }
);
export const DecrementCartItem = createAsyncThunk(
  "cart/DecrementCartItem",
  async (prodId) => {
    const encodedToken = localStorage.getItem("loginToken");
    const response = await axios.post(
      `/api/user/cart/${prodId}`,
      {
        action: {
          type: "decrement",
        },
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response.status === 200) {
      toast.warning("Removed one item", {
        position: "bottom-right",
      });
    }
    return response.data.cart;
  }
);
export default cartSlice.reducer;
