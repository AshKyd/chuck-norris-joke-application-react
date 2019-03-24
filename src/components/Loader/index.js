import React from "react";
import classnames from "classnames";
import "./Loader.css";

function Loader({ loading }) {
  return (
    <div
      className={classnames({
        Loader: true,
        "Loader--loading": loading
      })}
    />
  );
}

export default Loader;
