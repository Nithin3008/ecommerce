import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { AddCartItem } from "../Redux/CartSlice";
import { itemInCart, itemInWishList } from "../services/HelperFunctions";
import { AddWishlistItem } from "../Redux/WishlistRedux";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
const ProductSummary = () => {
  const { prodId } = useParams();
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cart);
  const wishList = useSelector((state) => state.wishlist);
  const productsList = useSelector((state) => state.prodCate.products);
  const data = productsList?.find((val) => val._id == prodId);
  console.log(data);
  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-center mt-44 gap-5 p-4 max-sm:flex-col ">
        <div>
          <img
            src={data.src}
            className=" h-80 object-fit rounded max-sm:h-48 max-sm:object-fit"
            alt="car"
          ></img>
        </div>
        <div className="space-y-4 max-sm:text-center">
          <h1 className="text-2xl">Company: {data.manufacturer}</h1>
          <h2 className="text-xl">Name: {data.title}</h2>
          <p className="text-xl">
            Rating: {data.rating}{" "}
            <FontAwesomeIcon icon={faStar} style={{ color: "#f9f462" }} />
          </p>
          <hr></hr>
          <p className="text-xl">Hp: {data.HP}</p>
          <p className="text-xl">Torque: {data.Torque}</p>
          <p className="text-xl">Price: {data.price}</p>
          <div className="space-x-2">
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
      </div>
    </>
  );
};

export default ProductSummary;
