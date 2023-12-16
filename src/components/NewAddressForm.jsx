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
    <div className="bg-white space-y-4 p-5 rounded-sm">
      <form className="flex flex-col space-y-2" onSubmit={submitAddr}>
        <label className="text-xl">Street</label>
        <input
          className="outline-none border-2 border-stone-600 p-1 text-lg rounded-lg"
          id="street"
          required
        ></input>
        <label className="text-xl">City</label>
        <input
          className="outline-none border-2 border-stone-600 p-1 rounded-lg  text-lg"
          id="city"
          required
        ></input>
        <label className="text-xl">Pincode</label>
        <input
          className="outline-none border-2 border-stone-600 p-1 rounded-lg  text-lg"
          id="code"
          required
          type="number"
        ></input>
        <label className="text-xl">Country</label>
        <input
          className="outline-none border-2 border-stone-600 p-1 rounded-lg text-lg"
          id="country"
          required
        ></input>
        <button
          className="p-2 text-lg bg-blue-500 text-white rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
      <Button
        styling={"p-2 text-lg bg-red-500 text-white rounded"}
        onReact={hideForm}
      >
        Cancel
      </Button>
    </div>
  );
};

export default NewAddressForm;
