import React from "react";
import EmployeeAdd from "./component/employeeAdd/EmployeeAdd";
import EmployeeList from "./component/employeeList/EmployeeList";
import { employee } from "./data/data";
function App() {
  const [List, setList] = React.useState(employee);
  return (
    <div>
      <h1> Employees App</h1>
      <EmployeeList employee={List} setList={setList} />
      <EmployeeAdd employee={List} setList={setList} />
    </div>
  );
}

export default App;
