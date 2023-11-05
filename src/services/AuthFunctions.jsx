import React, { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin, setLogout } from "../Redux/UserSlice";
import { setEmptyCart } from "../Redux/CartSlice";
import { setWishlistEmpty } from "../Redux/WishlistRedux";
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
      if (response.status === 200) {
        localStorage.setItem("loginToken", response.data.encodedToken);

        return nav("/");
      }
    } catch (error) {
      console.log(error);
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
      console.log(response.data);
      if (response.status == 201) {
        dispatch(setLogin(details));
        return nav("/Login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  function Logout() {
    localStorage.clear();
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
