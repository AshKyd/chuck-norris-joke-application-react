import React from "react";
import ReactDOM from "react-dom";
import Checkbox from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Checkbox />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should have label & input attached", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Checkbox />, div);
  const labelFor = div.querySelector("label").getAttribute("for");
  const labelId = div.querySelector("input").getAttribute("id");
  expect(labelFor).toEqual(labelId);
  ReactDOM.unmountComponentAtNode(div);
});
