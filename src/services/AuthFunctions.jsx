import React, { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin, setLogout } from "../Redux/UserSlice";
import { setEmptyCart } from "../Redux/CartSlice";
import { setWishlistEmpty } from "../Redux/WishlistRedux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  async function loginHandler(event, testDetails) {
    let userName = "";
    let pwd = "";
    if (testDetails) {
      userName = testDetails.userName;
      pwd = testDetails.pwd;
      dispatch(setLogin(testDetails));
    } else {
      userName = event.target.username.value;
      pwd = event.target.pwd.value;
    }
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: userName,
        password: pwd,
      });
      const det = response.data.foundUser;
      if (response.status === 200) {
        localStorage.setItem("loginToken", response.data.encodedToken);
        toast.success("Welcome Back", {
          position: "top-center",
        });
        dispatch(
          setLogin({
            fName: det.firstName,
            lName: det.lastName,
            userName: det.email,
          })
        );
        return nav("/");
      }
    } catch (error) {
      toast.error("Please enter correct details", {
        position: "top-center",
      });
    }
  }
  const signupHandler = async (event) => {
    const details = {
      fName: event.target.fname.value,
      lName: event.target.lname.value,
      userName: event.target.username.value,
    };
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: event.target.fname.value,
        lastName: event.target.lname.value,
        email: event.target.username.value,
        password: event.target.pwd.value,
      });
      if (response.status == 201) {
        dispatch(setLogin(details));
        toast.success(`Welcome ${details.fName}`, {
          position: "top-center",
        });
        return nav("/Login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  function Logout() {
    localStorage.clear();
    toast.warning(`Bye Bye`, {
      position: "top-center",
    });
    dispatch(setLogout());
    dispatch(setEmptyCart());
    dispatch(setWishlistEmpty());
  }
  return (
    <AuthContext.Provider value={{ loginHandler, signupHandler, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};
