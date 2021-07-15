import React from "react";

import "./Contact.css";
import ContactDatabase from "./ContactDatabase.json";
import Embassy from "./Embassy";
import ConsulatesCard from "./ConsulatesCard";
import PPIA from "./PPIA";

function Contact() {
  const contacts = ContactDatabase;

  return (
    <div className="container mt-3">
      <div>
        <PPIA data={contacts.PPIAustralia} />
      </div>
      <div>
        <h3>
          The information below are the lists of our embassy and consulates that
          are located in Australia
        </h3>
        <div>
          <Embassy data={contacts.Embassy} />
        </div>
        <div>
          {contacts.Consulate.map((element) => {
            return <ConsulatesCard data={element} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
