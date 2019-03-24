import React from "react";
import quotes from "./mock-quotes";

import { storiesOf } from "@storybook/react";

import Rows from "./";

storiesOf("Rows/Rows", module).add("Rows", () => <Rows {...{ quotes }} />);
