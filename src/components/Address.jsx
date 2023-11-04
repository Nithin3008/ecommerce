import React from "react";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal";
import EditAddress from "./EditAddress";
import { useDispatch } from "react-redux";
import { removeAddress } from "../Redux/UserSlice";

const Address = ({ data }) => {
  const [showEdit, setEdit] = useState(false);
  const dispatch = useDispatch();
  function closeForm() {
    setEdit(false);
  }
  return (
    <li className="border-2 border-stone-500 p-4">
      <p className="text-xl">Street: {data.street}</p>
      <p className="text-xl">Pincode: {data.code}</p>
      <p className="text-xl">City: {data.city}</p>
      <p className="text-xl">Country: {data.country}</p>
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
      {showEdit && (
        <Modal>
          <EditAddress data={data} closeForm={() => closeForm()}></EditAddress>
        </Modal>
      )}
    </li>
  );
};

export default Address;
