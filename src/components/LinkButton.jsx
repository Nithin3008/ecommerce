import React from "react";
import { NavLink } from "react-router-dom";
const LinkButton = ({ children, to, styling }) => {
  return (
    <NavLink
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "#0047AB" : "black",
          fontSize: isActive ? "1.4rem" : "",
        };
      }}
      to={to}
      className={styling}
    >
      {children}
    </NavLink>
  );
};

export default LinkButton;
