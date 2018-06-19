import * as React from "react";
import { ThemeProvider } from "display";
import TestComponent from "components/TestComponent";

const App = () => (
  <ThemeProvider>
    <TestComponent />
  </ThemeProvider>
);

export default App;
