import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "./component/context/AppContext";
import RoutePath from "./component/router/RoutePath";
import Exam from "./component/exam/Exam";
import "./App.css";

function App() {
  const { appName } = useContext(AppContext);
  return (
    <div>
      <Exam />
      <hr></hr>
      <h1> {appName} </h1>
      <RoutePath />
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
