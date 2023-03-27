import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "./component/context/AppContext";
import RoutePath from "./component/router/RoutePath";
import "./App.css";

const students = [
  { name: "Ali", grade: "A" },
  { name: "Veli", grade: "B" },
];

function getStudents(array, grade) {
  array.filter((stu) => stu.grade !== grade);
}

console.log(getStudents(students, "A"));

function App() {
  const { appName } = useContext(AppContext);
  return (
    <div>
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
