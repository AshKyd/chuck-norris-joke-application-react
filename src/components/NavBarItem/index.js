import React from "react";
import FontAwesome from "react-fontawesome";
import classnames from "classnames";
import "./NavBarItem.css";

function NavBarItem({ icon, label, active, onClick }) {
  return (
    <button
      className={classnames({
        NavBarItem: true,
        "NavBarItem--active": active
      })}
      onClick={onClick}
    >
      <div className="NavBarItem__icon">
        <FontAwesome name={icon} />
      </div>
      <div className="NavBarItem__label">{label}</div>
    </button>
  );
}

export default NavBarItem;
