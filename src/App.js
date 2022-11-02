import React from "react";
import EmployeeList from "./component/employeeList/EmployeeList";
import { employee } from "./data/data";
function App() {
  const [List, setList] = React.useState(employee);
  return (
    <div>
      <h1> Employees App</h1>
      <EmployeeList employee={List} setList={setList} />
    </div>
  );
}

export default App;
