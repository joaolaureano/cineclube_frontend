import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { SharedSnackbarProvider } from "./components/SnackBar/SnackContext";
import theme from "./assets/styles/theme";
import "./utils/firebase";
import Router from "./router";

import "./assets/styles/reset.css";
import "./assets/styles/global.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SharedSnackbarProvider>
          <Router />
        </SharedSnackbarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
