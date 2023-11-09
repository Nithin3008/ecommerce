import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCircleMinus,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  DecrementCartItem,
  DeleteCartItem,
  IncrementCartItem,
} from "../Redux/CartSlice";
import { itemInWishList } from "../services/HelperFunctions";
import { AddWishlistItem } from "../Redux/WishlistRedux";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
const CartListItem = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <li className="rounded-lg w-fit">
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
        <div className="space-x-12 ">
          <FontAwesomeIcon
            icon={faCirclePlus}
            size="xl"
            style={{ color: "#10a0e8" }}
            onClick={() => dispatch(IncrementCartItem(data._id))}
          />
          <span className="text-lg">{data.qty}</span>
          <>
            {data.qty <= 1 ? null : (
              <FontAwesomeIcon
                icon={faCircleMinus}
                size="xl"
                style={{ color: "#e81022" }}
                onClick={() => dispatch(DecrementCartItem(data._id))}
              />
            )}
          </>
        </div>
        <div className="space-x-4">
          <Button
            onReact={() => dispatch(DeleteCartItem(data._id))}
            styling={
              "border-2 border-blue-500 p-1 rounded text-blue-500 hover:bg-blue-500 hover:text-white"
            }
          >
            Remove from Cart
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

export default CartListItem;
