import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import { useState } from "react";
import Button from "../components/Button";
import Address from "../components/Address";
import ProfileDetails from "../components/ProfileDetails";
import Modal from "../components/Modal";
import NewAddressForm from "../components/NewAddressForm";
const UserProfile = () => {
  const userDetails = useSelector((state) => state.user);
  const [display, setDisplay] = useState(true);
  const [newAddr, setNewAddr] = useState(false);
  function hideNewAddressForm() {
    setNewAddr(false);
  }
  return (
    <>
      <NavBar></NavBar>
      <div className=" space-y-4 text-center w-max mx-auto mt-9 p-4">
        <div className="space-x-4 border-2 w-fit m-auto border-stone-500">
          <Button
            styling={`${
              display
                ? "p-2 text-xl bg-blue-500 text-white rounded-sm"
                : "text-xl p-2"
            }`}
            onReact={() => setDisplay(true)}
          >
            My Profile
          </Button>
          <Button
            styling={`${
              display
                ? "text-xl p-2"
                : "p-2 text-xl bg-blue-500 text-white rounded-sm"
            }`}
            onReact={() => setDisplay(false)}
          >
            Address
          </Button>
        </div>
        <hr></hr>
        {display ? (
          <ProfileDetails data={userDetails.user}></ProfileDetails>
        ) : (
          <>
            <ul className="space-y-3">
              {userDetails.address.map((val) => (
                <Address key={val.id} data={val}></Address>
              ))}
            </ul>
            <Button
              onReact={() => setNewAddr((s) => !s)}
              styling={"p-2 bg-blue-500 text-white rounded"}
            >
              Add New Address
            </Button>
            {newAddr && (
              <Modal>
                <NewAddressForm
                  hideForm={() => hideNewAddressForm()}
                ></NewAddressForm>
              </Modal>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default UserProfile;
