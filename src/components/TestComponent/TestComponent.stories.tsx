import * as React from "react";
import { storiesOf } from "@storybook/react";
import TestComponent from "./TestComponent";

storiesOf("BoilerplateTestComponent", module).add("test render", () => (
  <TestComponent />
));
