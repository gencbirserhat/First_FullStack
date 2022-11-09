import React from "react";
import { data } from "../../data/data";
import { contactdata } from "../../data/contactdata";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [Contactlist, setContactlist] = React.useState(contactdata);
  const [employee, setList] = React.useState(data);
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
    Contactlist,
    setContactlist,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;
