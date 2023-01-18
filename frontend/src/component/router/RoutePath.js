import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import EmployeeAdd from "../employeeAdd/EmployeeAdd";
import EmployeeList from "../employeeList/EmployeeList";
import EmployeeUpdate from "../employeeUpdate/EmployeeUpdate";
import Counter from "../counter/Counter";

const RoutePath = () => {
  return (
    <div>
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
};

export default RoutePath;
