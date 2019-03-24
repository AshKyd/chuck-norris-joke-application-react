import React from "react";
import Checkbox from "../Checkbox";
import "./Row.css";

function Row({ id = 0, text, checked, onFav: onCheck, onUnfav: onUncheck }) {
  return (
    <div className="Row">
      <div className="Row__text">{text}</div>
      <div className="Row__check">
        <Checkbox
          {...{ id, onCheck, onUncheck, checked }}
          label="Add to favourites"
          icon="star"
        />
      </div>
    </div>
  );
}

export default Row;
