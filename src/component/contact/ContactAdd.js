import React from "react";

const ContactAdd = ({ setContactList, ContactList }) => {
  return (
    <div>
      <form>
        <input
          id="firstName"
          name="firstName"
          placeholder="First Name"
          type={"text"}
        ></input>
        <br></br>
        <input
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          type={"text"}
        ></input>
        <br></br>
        <input
          id="phoneNum"
          name="phoneNum"
          placeholder="Phone Number"
          type={"text"}
        ></input>
      </form>
      <button>Save</button>
    </div>
  );
};

export default ContactAdd;
