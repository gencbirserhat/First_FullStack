import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

function EmployeeAdd() {
  const navigate = useNavigate();
  const { postOneEmployee } = useContext(AppContext);

  const [Values, setValues] = React.useState({
    firstName: "",
    lastName: "",
  });

  const handleEmpty = (e) => {
    e.preventDefault();
    if (Values.firstName.length + Values.lastName.length > 2) {
      handleSubmit(e);

      navigate(`/employees`);
    } else {
      window.alert("Lütfen Değer Giriniz!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postOneEmployee({ ...Values, salary: 10 });

    setValues({
      firstName: "",
      lastName: "",
    });
  };

  const handleChange = (e) => {
    setValues({
      ...Values,
      [e.target.name]: e.target.value,
    });
  };

  const handleClear = () => {
    setValues({
      firstName: "",
      lastName: "",
    });
  };

  return (
    <div>
      <h3>Employee Add</h3>
      <form onSubmit={handleEmpty}>
        <p>
          <input
            id="firstName"
            name="firstName"
            placeholder="First Name"
            type={"text"}
            onChange={handleChange}
            value={Values.firstName}
          />
        </p>
        <p>
          <input
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            type={"text"}
            onChange={handleChange}
            value={Values.lastName}
          />
        </p>
        <p>
          <button type="submit">Save</button>

          <button onClick={handleClear} type="button">
            Clear
          </button>
        </p>
      </form>
    </div>
  );
}

export default EmployeeAdd;
