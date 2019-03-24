import React from "react";
import { storiesOf } from "@storybook/react";

import Loader from "./";

storiesOf("Loader", module)
  .add("Loading", () => <Loader loading={true} />)
  .add("not loading", () => <Loader loading={false} />);
