import React, { useContext } from "react";
import AppContext from "./component/context/AppContext";
import EmployeeAdd from "./component/employeeAdd/EmployeeAdd";
import EmployeeList from "./component/employeeList/EmployeeList";
import EmployeeUpdate from "./component/employeeUpdate/EmployeeUpdate";

function App() {
  const { appName } = useContext(AppContext);
  return (
    <div>
      <h1> {appName} </h1>
      <EmployeeList />
      <EmployeeAdd />
      <EmployeeUpdate />
    </div>
  );
}

export default App;
