import React from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { addAddress } from "../Redux/UserSlice";
import { v4 as uuid } from "uuid";
const NewAddressForm = ({ hideForm }) => {
  const dispatch = useDispatch();
  function submitAddr(event) {
    event.preventDefault();
    const newAddr = {
      id: uuid(),
      street: event.target.street.value,
      code: event.target.code.value,
      city: event.target.city.value,
      country: event.target.country.value,
    };
    dispatch(addAddress(newAddr));
    hideForm();
  }
  return (
    <form
      className="flex flex-col space-y-8 bg-white  p-10 rounded-lg"
      onSubmit={submitAddr}
    >
      <h1 className="text-3xl">Add new address</h1>

      <input
        className="outline-none border-2 border-stone-400 p-1 text-lg rounded-lg"
        id="street"
        required
        placeholder="Street"
      ></input>

      <input
        className="outline-none border-2 border-stone-400 p-1 rounded-lg  text-lg"
        id="city"
        required
        placeholder="city"
      ></input>

      <input
        className="outline-none border-2 border-stone-400 p-1 rounded-lg  text-lg"
        id="code"
        required
        type="number"
        placeholder="pincode"
      ></input>

      <input
        className="outline-none border-2 border-stone-400 p-1 rounded-lg text-lg"
        id="country"
        required
        placeholder="country"
      ></input>
      <div className="space-x-8">
        <Button
          styling={"p-2 text-lg bg-red-500 text-white rounded"}
          onReact={hideForm}
        >
          Cancel
        </Button>
        <button
          className="p-2 text-lg bg-blue-500 text-white rounded"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewAddressForm;
