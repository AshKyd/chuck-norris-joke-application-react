import React from "react";

import { storiesOf } from "@storybook/react";

import NavBarItem from "./";

storiesOf("NavBar/Item", module)
  .add("NavBarItem", () => <NavBarItem label="Home" icon="home" />)
  .add("NavBarItem active", () => (
    <NavBarItem label="Home" icon="home" active={true} />
  ));
