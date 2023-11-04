import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthVerify = ({ children }) => {
  const usersDetails = useSelector((state) => state.user.isLogin);
  return usersDetails ? children : <Navigate to="/Login"></Navigate>;
};

export default AuthVerify;
