import React from "react";
import EmployeeService from "../../services/EmployeeService";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [employee, setList] = React.useState([]);

  React.useEffect(() => {
    getAllEmployees();
  }, []);

  const employeeService = new EmployeeService();

  const getAllEmployees = () => {
    employeeService.getAllEmployees().then((resp) => setList(resp));
  };

  const postOneEmployee = (employee) => {
    employeeService
      .postOneEmployee(employee) //action => backend
      .then((resp) => setList([...employee, resp])); // reducer => state update
  };

  const putOneEmployee = (id, employee) => {
    employeeService
      .putOneEmployee(id, employee)
      .then((resp) =>
        setList([...employee.filter((emp) => emp.id !== id), resp])
      );
  };

  const deleteOneEmployee = (id) => {
    employeeService
      .deleteOneEmployee(id)
      .then((resp) => setList([...employee.filter((emp) => emp.id !== id)]));
  };

  const [SelectedEmployee, setSelectedEmployee] = React.useState({
    id: 0,
    firstName: "",
    lastName: "",
  });
  const values = {
    employee,
    setList,
    appName: "Employee App",
    setSelectedEmployee,
    SelectedEmployee,
    postOneEmployee,
    putOneEmployee,
    deleteOneEmployee,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;
