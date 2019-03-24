import React from "react";
import { storiesOf } from "@storybook/react";

import Error from "./";

storiesOf("Error", module).add("Unchecked", () => <Error>Oh no!</Error>);
