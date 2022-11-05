import React, { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AppContext from "./component/context/AppContext";
import EmployeeAdd from "./component/employeeAdd/EmployeeAdd";
import EmployeeList from "./component/employeeList/EmployeeList";
import EmployeeUpdate from "./component/employeeUpdate/EmployeeUpdate";
import Counter from "./component/counter/Counter";

function App() {
  const { appName } = useContext(AppContext);
  return (
    <div>
      <h1> {appName} </h1>
      <Routes>
        <Route path="/employees" element={<EmployeeList />}></Route>
        <Route path="/employees/add" element={<EmployeeAdd />}></Route>
        <Route
          path="/employees/update/:id"
          element={<EmployeeUpdate />}
        ></Route>
        <Route path="/counter" element={<Counter />}></Route>
      </Routes>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/employees">Employees</Link>
        </li>
        <li>
          <Link to="/employees/add">Add</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
