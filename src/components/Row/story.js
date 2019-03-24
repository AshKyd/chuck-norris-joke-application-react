import React from "react";

import { storiesOf } from "@storybook/react";

import Row from "./";

storiesOf("Row", module).add("Row", () => (
  <Row id={1} text="Chuck Norris is the reason why Waldo is hiding ok." />
));
