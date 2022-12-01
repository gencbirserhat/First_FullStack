import React from "react";

const ContactApp = ({ data }) => {
  return (
    <div key={data.id}>
      Name: {data.firstName} {data.lastName}
      <br></br>Number: {data.phoneNum}
      <button>Kişi Güncelleme</button>
      <hr></hr>
    </div>
  );
};

export default ContactApp;
