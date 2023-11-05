import React from "react";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import Address from "../components/Address";
import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const usersList = useSelector((state) => state.user);
  const cartList = useSelector((state) => state.cart.cart);
  const totalAmount = cartList.reduce((acc, val) => acc + val.price, 0);
  const nav = useNavigate();
  const [selectAddr, setCheckAdd] = useState("");
  function setCheckoutAddr(id) {
    console.log(id);
    setCheckAdd(id);
  }
  function checkoutCart() {
    nav("/");
  }
  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-around mt-4 max-md:flex max-md:flex-col max-md:w-fit max-md:mx-auto max-md:gap-7">
        <ul className="space-y-3">
          {usersList.address.map((val) => (
            <Address
              data={val}
              CheckoutAddr={setCheckoutAddr}
              addrVerify={selectAddr}
            ></Address>
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
              styling={"p-2 text-xl  bg-lime-400"}
              onReact={() => (selectAddr ? checkoutCart() : "")}
            >
              Proceed to Order
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
