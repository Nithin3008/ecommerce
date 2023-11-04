import React from "react";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal";
import EditAddress from "./EditAddress";
import { useDispatch } from "react-redux";
import { removeAddress } from "../Redux/UserSlice";
import { useLocation } from "react-router-dom";

const Address = ({ data, CheckoutAddr, addrVerify }) => {
  const [showEdit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  function closeForm() {
    setEdit(false);
  }
  return (
    <li
      className={`border-2 border-stone-500 p-4 w-96 ${
        location.pathname === "/Checkout" ? "flex items-center gap-4" : ""
      }`}
    >
      {location.pathname === "/Checkout" && (
        <div>
          <input
            required
            onClick={() => CheckoutAddr(data.id)}
            type="radio"
            checked={addrVerify === data.id}
          ></input>
        </div>
      )}
      <div>
        <p className="text-xl">Street: {data.street}</p>
        <p className="text-xl">Pincode: {data.code}</p>
        <p className="text-xl">City: {data.city}</p>
        <p className="text-xl">Country: {data.country}</p>
        {location.pathname === "/Profile" && (
          <div className="space-x-2 space-y-1">
            <Button
              onReact={() => setEdit((t) => !t)}
              styling={"text-lg text-white rounded p-1 px-2 bg-blue-500"}
            >
              Edit
            </Button>
            <Button
              onReact={() => dispatch(removeAddress(data.id))}
              styling={"text-lg text-white rounded p-1 px-2 bg-red-500"}
            >
              Delete
            </Button>
          </div>
        )}
      </div>

      {showEdit && (
        <Modal>
          <EditAddress data={data} closeForm={() => closeForm()}></EditAddress>
        </Modal>
      )}
    </li>
  );
};

export default Address;
