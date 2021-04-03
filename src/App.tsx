import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import theme from "./assets/styles/theme";
import Example from "./pages/Login";

import "./assets/styles/reset.scss";
import "./assets/styles/global.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" exact component={Example} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
