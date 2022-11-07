import React, { useContext } from "react";
import { data } from "../../data/data";
import AppContext from "../context/AppContext";
import Employee from "./employee/Employee";

function EmployeeList() {
  const { employee, setList, setSelectedEmployee } = useContext(AppContext);
  const handleClearAll = () => {
    setList([]);
  };

  const handleRemove = (id) => {
    setList(employee.filter((emp) => emp.id !== id));
  };

  const handleGetAll = () => {
    setList(data);
  };
  return (
    <div>
      <h3>Employee List {employee.length}</h3>
      {employee.map((emp, index) => (
        <Employee
          setSelectedEmployee={setSelectedEmployee}
          employee={emp}
          key={index}
          handleRemove={handleRemove}
        />
      ))}
      <button onClick={handleClearAll}>Clear All</button>
      <button onClick={handleGetAll}>Get All</button>
    </div>
  );
}

export default EmployeeList;
