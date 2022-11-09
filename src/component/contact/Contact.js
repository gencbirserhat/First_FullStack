import React from "react";
import { Link } from "react-router-dom";
import { contactdata } from "../../data/contactdata";
import ContactApp from "./ContactApp";

function Contact() {
  return (
    <div>
      <h3>Contact App</h3>
      {contactdata.map((cnt) => (
        <ContactApp data={cnt} key={cnt.id} />
      ))}
      <li>
        <Link to="/contacts/add">Add</Link>
      </li>
    </div>
  );
}

export default Contact;
