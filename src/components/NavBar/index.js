import React from "react";
import NavBarItem from "../NavBarItem";
import "./NavBar.css";

function NavBar({ items }) {
  return (
    <div className="NavBar">
      {items.map(props => (
        <NavBarItem key={props.label} {...props} />
      ))}
    </div>
  );
}

export default NavBar;
