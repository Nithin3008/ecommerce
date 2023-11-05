import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { AddCartItem, FetchCart } from "../Redux/CartSlice";
import { itemInCart, itemInWishList } from "../services/HelperFunctions";
import { AddWishlistItem, FetchWishlist } from "../Redux/WishlistRedux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProductsListItems = ({ data }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const userLogin = useSelector((state) => state.user.isLogin);
  function loginCheckerCart(data) {
    userLogin ? dispatch(AddCartItem(data)) : nav("/Login");
  }
  function loginCheckerWishList(data) {
    userLogin ? dispatch(AddWishlistItem(data)) : nav("/Login");
  }
  return (
    <li className="rounded-lg">
      <img
        src={data.src}
        className="h-40 object-cover rounded-t-md"
        alt="car"
        onClick={() => nav(`/ProductSummary/${data._id}`)}
      ></img>
      <div className="text-center space-y-2  p-4">
        <div className="space-x-4">
          <span className="text-xl">{data.title} </span>
          <span>
            {data.rating}
            <FontAwesomeIcon icon={faStar} style={{ color: "#f9f462" }} />
          </span>
        </div>
        <p className="text-lg">MSRP: {data.price}</p>
        <div className="space-x-4">
          <Button
            isdisabled={itemInCart(data._id) === data._id}
            onReact={() => loginCheckerCart(data)}
            styling={
              "border-2 border-blue-500 p-1 rounded text-blue-500 hover:bg-blue-500 hover:text-white"
            }
          >
            {itemInCart(data._id) === data._id ? "Go to Cart" : "Add to Cart"}
          </Button>
          <Button
            onReact={() => loginCheckerWishList(data)}
            isdisabled={itemInWishList(data._id) == data._id}
            styling={
              "border-2 border-blue-500 p-1 rounded text-blue-500 hover:bg-blue-500 hover:text-white"
            }
          >
            {itemInWishList(data._id) == data._id
              ? "Go to Wishlist"
              : "Add to WishList"}
          </Button>
        </div>
      </div>
    </li>
  );
};

export default ProductsListItems;
