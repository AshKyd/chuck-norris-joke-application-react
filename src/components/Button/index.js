import React from "react";
import "./Button.css";

function Button({ children, disabled, type, style, onClick = () => {} }) {
  return (
    <button className="Button" {...{ disabled, type, onClick, style }}>
      {children}
    </button>
  );
}

export default Button;
