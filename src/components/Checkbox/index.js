import React from "react";
import FontAwesome from "react-fontawesome";
import classnames from "classnames";
import "./Checkbox.css";

function Checkbox({
  id = 0,
  label,
  checked = false,
  icon = "check",
  showLabel = false,
  onCheck = () => {},
  onUncheck = () => {}
}) {
  const computedId = `cn-checkbox__${id}`;
  return (
    <label
      className={classnames({
        Checkbox: true,
        "Checkbox--checked": checked,
        "Checkbox--with-label": showLabel
      })}
      htmlFor={computedId}
    >
      <span className="Checkbox__icon">
        <FontAwesome name={icon} />
      </span>
      <span className={classnames({ "accessible-hide": !showLabel })}>
        {label}
      </span>
      <input
        className="accessible-hide"
        id={computedId}
        type="checkbox"
        checked={checked}
        onChange={e => (e.target.checked ? onCheck(id) : onUncheck(id))}
      />
    </label>
  );
}

export default Checkbox;
