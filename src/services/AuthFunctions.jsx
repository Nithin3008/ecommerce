import React, { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const nav = useNavigate();
  async function loginHandler(event) {
    console.log(event.target.username.value, event.target.pwd.value);
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: event.target.username.value,
        password: event.target.pwd.value,
      });
      console.log(response.data);
      if (response.status === 200) {
        localStorage.setItem("loginToken", response.data.encodedToken);
        return nav("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  const signupHandler = async (event) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: event.target.fname.value,
        lastName: event.target.lname.value,
        email: event.target.username.value,
        password: event.target.pwd.value,
      });
      console.log(response.data);
      if (response.status == 201) {
        return nav("/Login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ loginHandler, signupHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
