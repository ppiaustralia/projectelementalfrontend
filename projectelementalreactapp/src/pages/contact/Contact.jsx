import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Contact.css';
import ContactDatabase from './ContactDatabase.json';
import Embassy from './Embassy';
import ConsulatesCard from './ConsulatesCard';
import PPIA from './PPIA';

// import { Container, Row, Col, Image } from 'react-bootstrap/';

function Contact(data) {
  const [contact, setContact] = useState([]);
  const contactImage = 'https://ppiacontact.s3.us-east-2.amazonaws.com/';

  useEffect(() => {
    setContact([]);

    axios
      .get('https://ppia-backend.herokuapp.com/external_contact/')
      .then((props) => {
        setContact(data.data);
        //console.log(data.data)
      });
  });

  return (
    <div className="container mt-3">
      <div>
        <PPIA data={contact.PPIAustralia} />
      </div>
      <div>
        <p>
          The information below are the lists of our embassy and consulates that
          are located in Australia
        </p>
        <div>
          <Embassy data={contact.Embassy} />
        </div>
        <div>
          <ConsulatesCard data={contact.ConsulatesCard} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
