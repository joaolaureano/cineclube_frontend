import React from "react";
import { ThemeProvider } from "@material-ui/core";

import theme from "./assets/styles/theme";
import "./utils/firebase";
import Router from "./router";

import "./assets/styles/reset.scss";
import "./assets/styles/global.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
