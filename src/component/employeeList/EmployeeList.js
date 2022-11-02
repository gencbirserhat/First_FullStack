import React from "react";
import Employee from "./employee/Employee";

function EmployeeList({ employee, setList }) {
  const handleClearAll = () => {
    setList([]);
  };

  const handleRemove = (id) => {
    setList(employee.filter((emp) => emp.id !== id));
  };
  return (
    <div>
      <h3>Employee List {employee.length}</h3>
      {employee.map((emp, index) => (
        <Employee employee={emp} key={index} handleRemove={handleRemove} />
      ))}
      <button onClick={handleClearAll}>Clear All</button>
    </div>
  );
}

export default EmployeeList;
