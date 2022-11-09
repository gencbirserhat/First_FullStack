import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "./component/context/AppContext";
import RoutePath from "./component/router/RoutePath";
import "./App.css";

function App() {
  const { appName } = useContext(AppContext);
  return (
    <div>
      <h1> {appName} </h1>
      <RoutePath className={"route"} />
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
