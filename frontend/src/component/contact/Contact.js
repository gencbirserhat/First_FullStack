import React from "react";
import { Link } from "react-router-dom";
import { contactdata } from "../../data/contactdata";
import AppContext from "../context/AppContext";
import ContactApp from "./ContactApp";

function Contact() {
  const { Contactlist } = React.useContext(AppContext);
  return (
    <div>
      <h3>Contact App</h3>
      {Contactlist.map((cnt) => (
        <ContactApp data={cnt} key={cnt.id} />
      ))}
      <button>
        <Link to="/contacts/add">Add</Link>
      </button>
    </div>
  );
}

export default Contact;
