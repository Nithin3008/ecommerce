import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { itemInCart } from "../services/HelperFunctions";
import { RemoveWishlistItem } from "../Redux/WishlistRedux";
import { AddCartItem } from "../Redux/CartSlice";
const WishListItem = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const nav = useNavigate();
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
            onReact={() => dispatch(AddCartItem(data))}
            styling={
              "border-2 border-blue-500 p-1 rounded text-blue-500 hover:bg-blue-500 hover:text-white"
            }
          >
            {itemInCart(data._id) === data._id ? "Go to Cart" : "Add to Cart"}
          </Button>
          <Button
            styling={
              "border-2 border-blue-500 p-1 rounded text-blue-500 hover:bg-blue-500 hover:text-white"
            }
            onReact={() => dispatch(RemoveWishlistItem(data._id))}
          >
            Remove From Wishlist
          </Button>
        </div>
      </div>
    </li>
  );
};

export default WishListItem;
