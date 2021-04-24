import "./App.css";

// this below import is neccessary for working of the React-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/menu.component.js";
import MainRouter from "./components/router.component.js";

function App() {
  return (
    <div>
      <Menu />
      <MainRouter />
    </div>
  );
}

export default App;
