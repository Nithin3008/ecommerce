import React from "react";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import CartListItem from "../components/CartListItem";
import { useEffect } from "react";
import { FetchCart } from "../Redux/CartSlice";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const cartList = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const totalAmount = cartList.reduce((acc, val) => acc + val.price, 0);
  useEffect(() => {
    dispatch(FetchCart());
  }, [dispatch]);
  return (
    <>
      <NavBar></NavBar>
      {cartList.length < 1 ? (
        <h1 className="text-2xl text-center mt-10">Cart is Empty</h1>
      ) : (
        <div className="flex justify-around mt-10 max-md:flex max-md:flex-col">
          <ul className="grid grid-cols-2 max-sm:flex max-sm:flex-col ">
            {cartList?.map((val) => (
              <CartListItem data={val} key={val._id}></CartListItem>
            ))}
          </ul>
          <div className="space-y-3 max-md:text-lg">
            <h1 className="text-xl text-center">Cart Details and Prices</h1>
            <hr></hr>
            <ul>
              {cartList?.map((val) => (
                <li className="flex justify-between gap-24 p-2 items-center">
                  <span className="text-lg">
                    {val.title} ({val.qty}):{" "}
                  </span>
                  <span className="text-lg">{val.price}$</span>
                </li>
              ))}
            </ul>
            <hr></hr>
            <div className="space-x-48 text-xl">
              <span>Total Price:</span> <span>{totalAmount}$</span>
            </div>
            <hr></hr>
            <div className="text-center">
              <Button
                styling={
                  "p-2 text-lg bg-yellow-400 text-white rounded hover:bg-white hover:text-yellow-500 hover:border-2 hover: border-yellow-500"
                }
                onReact={() => nav("/Checkout")}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
