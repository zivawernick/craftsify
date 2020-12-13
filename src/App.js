import React from "react";

import Routes from "./router";

import NavLinks from "./components/organisms/NavLinks";
import Header from "./components/atoms/Header";

function App() {
  return (
    <>
      <Header />
      <Routes />
      <NavLinks />
    </>
  );
}

export default App;
