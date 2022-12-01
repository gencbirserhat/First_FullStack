import React from "react";
import AppContext from "../context/AppContext";

const ContactAdd = () => {
  const { setContactlist, Contactlist } = React.useContext(AppContext);
  const [Values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    phoneNum: "",
  });

  const handleEmpty = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  const handleSubmit = (e) => {
    setContactlist([
      ...Contactlist,
      {
        id: Contactlist.length + 1,
        ...Values,
      },
    ]);
    setValues({
      firstName: "",
      lastName: "",
      phoneNum: "",
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
      phoneNum: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleEmpty}>
        <input
          id="firstName"
          name="firstName"
          onChange={handleChange}
          placeholder="First Name"
          type={"text"}
          value={Values.firstName}
        ></input>
        <br></br>
        <input
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          type={"text"}
          value={Values.lastName}
        ></input>
        <br></br>
        <input
          id="phoneNum"
          name="phoneNum"
          placeholder="Phone Number"
          onChange={handleChange}
          type={"text"}
          value={Values.phoneNum}
        ></input>
        <button type="submit">Save</button>
        <button onClick={handleClear} type="button">
          Clear
        </button>
      </form>
    </div>
  );
};

export default ContactAdd;
