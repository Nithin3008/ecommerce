import React from "react";
import { NavLink } from "react-router-dom";
const LinkButton = ({ children, to, style }) => {
  return (
    <NavLink to={to} className={style}>
      {children}
    </NavLink>
  );
};

export default LinkButton;
