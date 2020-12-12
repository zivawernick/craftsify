import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./router";

import NavLinks from "./components/organisms/NavLinks";

function App() {
  return (
    <Router>
      <Routes />
      <NavLinks />
    </Router>
  );
}

export default App;
