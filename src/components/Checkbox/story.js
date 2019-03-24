import React from "react";
import { storiesOf } from "@storybook/react";

import Checkbox from "./";

storiesOf("Checkbox", module)
  .add("With label", () => (
    <Checkbox label="Add to favourites" showLabel={true} checked={false} />
  ))
  .add("Unchecked", () => (
    <Checkbox label="Add to favourites" checked={false} />
  ))
  .add("Checked", () => <Checkbox label="Add to favourites" checked={true} />);
