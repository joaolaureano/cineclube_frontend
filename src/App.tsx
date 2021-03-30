import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Example from "./pages/Example";

import "./assets/styles/globalStyles.scss";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Example} />
    </Router>
  );
}

export default App;
