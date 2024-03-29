import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

function EmployeeUpdate() {
  const {
    employee,
    setList,
    SelectedEmployee,
    setSelectedEmployee,
    putOneEmployee,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSelectedEmployee({
      ...SelectedEmployee,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    putOneEmployee(SelectedEmployee.id, SelectedEmployee);
    setList([...employee]);
    navigate(`/employees`);
  };
  return (
    <div>
      <h3>Employee Update</h3>
      <p>{JSON.stringify(SelectedEmployee)}</p>
      <form onSubmit={handleSubmit}>
        <input
          id="firstName"
          name="firstName"
          onChange={handleChange}
          value={SelectedEmployee.firstName}
          type={"text"}
          placeholder="First Name"
        />
        <input
          id="lastName"
          name="lastName"
          onChange={handleChange}
          value={SelectedEmployee.lastName}
          type={"text"}
          placeholder="Last Name"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
export default EmployeeUpdate;
