import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./";

storiesOf("Button", module).add("Unchecked", () => <Button>Click me</Button>);
