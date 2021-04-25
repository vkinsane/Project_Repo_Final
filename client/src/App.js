import "./App.css";

// this below import is neccessary for working of the React-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/menu.component.js";
import MainRouter from "./components/router.component.js";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <MainRouter />
    </React.Fragment>
  );
}

export default App;
