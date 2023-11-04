import React from "react";
import Button from "./Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editAdress } from "../Redux/UserSlice";

const EditAddress = ({ data, closeForm }) => {
  const [editAddr, setAddr] = useState({ ...data });
  const dispatch = useDispatch();
  return (
    <form className="flex flex-col p-4 space-y-2 bg-white w-96 h-max rounded-md">
      <label className="text-xl">Street</label>
      <input
        className="outline-none border-2 border-stone-600 p-2 text-lg"
        required
        value={editAddr.street}
        onChange={(e) => setAddr({ ...editAddr, street: e.target.value })}
      ></input>
      <label>Pincode</label>
      <input
        className="outline-none border-2 border-stone-600 p-2 text-lg"
        required
        value={editAddr.code}
        onChange={(e) => setAddr({ ...editAddr, code: e.target.value })}
      ></input>
      <label>City</label>
      <input
        className="outline-none border-2 border-stone-600 p-2 text-lg"
        required
        value={editAddr.city}
        onChange={(e) => setAddr({ ...editAddr, city: e.target.value })}
      ></input>
      <label>Country</label>
      <input
        className="outline-none border-2 border-stone-600 p-2 text-lg"
        required
        value={editAddr.country}
        onChange={(e) => setAddr({ ...editAddr, country: e.target.value })}
      ></input>
      <Button
        onReact={(e) => {
          e.preventDefault();
          dispatch(editAdress(editAddr));
          closeForm();
        }}
        styling={"bg-blue-500 text-lg p-2"}
      >
        Edit Address
      </Button>
      <Button onReact={closeForm} styling={"bg-red-500 text-lg p-2"}>
        Cancel
      </Button>
    </form>
  );
};

export default EditAddress;
