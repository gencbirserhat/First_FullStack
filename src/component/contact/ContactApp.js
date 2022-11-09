import React from "react";

const ContactApp = ({ data }) => {
  return (
    <div key={data.id}>
      Name: {data.firstName} {data.lastName}
      <br></br>Number: {data.phoneNum}
      <hr></hr>
    </div>
  );
};

export default ContactApp;
