import React from "react";

import { storiesOf } from "@storybook/react";

import NavBar from "./";

storiesOf("NavBar/Bar", module).add("NavBar", () => (
  <NavBar
    items={[
      { label: "Home", icon: "home" },
      { label: "Favourites", icon: "star" }
    ]}
  />
));
