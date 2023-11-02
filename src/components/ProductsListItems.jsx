import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { AddCartItem } from "../Redux/CartSlice";
import { itemInCart, itemInWishList } from "../services/HelperFunctions";
import { AddWishlistItem } from "../Redux/WishlistRedux";

const ProductsListItems = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <li className="rounded-lg  ">
      <img
        src={data.src}
        className="h-40 object-cover rounded-t-md"
        alt="car"
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
            isdisabled={itemInCart(data._id) == data._id}
            onReact={() => dispatch(AddCartItem(data))}
            styling={
              "border-2 border-blue-500 p-1 rounded text-blue-500 hover:bg-blue-500 hover:text-white"
            }
          >
            {itemInCart(data._id) == data._id ? "Go to Cart" : "Add to Cart"}
          </Button>
          <Button
            onReact={() => dispatch(AddWishlistItem(data))}
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