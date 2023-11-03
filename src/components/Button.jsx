import React from "react";

const Button = ({ isdisabled, children, onReact, styling }) => {
  return (
    <button disabled={isdisabled} onClick={onReact} className={styling}>
      {children}
    </button>
  );
};

export default Button;
