import React from "react";
import { storiesOf } from "@storybook/react";
import quotes from "../Rows/mock-quotes";
import App from "./";

storiesOf("App", module).add("App", () => <App {...{ quotes }} />);
