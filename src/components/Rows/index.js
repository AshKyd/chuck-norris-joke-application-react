import React from "react";
import Row from "../Row";
import "./Rows.css";

function Rows({ quotes = [], onFav, onUnfav }) {
  return (
    <ul className="Rows">
      {quotes.map(props => (
        <li className="Rows__row" key={props.id}>
          <Row {...props} {...{ onFav, onUnfav }} />
        </li>
      ))}
    </ul>
  );
}

export default Rows;
