import React from "react";

const Button = ({ children, onReact }) => {
  return <button onClick={onReact}>{children}</button>;
};

export default Button;
